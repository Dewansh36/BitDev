const express=require('express');
const mongoose=require('mongoose');
const passport=require('passport');
const app=express();
const localStrat=require('passport-local');
const User=require('./models/schemauser');
const Post=require('./models/schemapost');
app.use(express.urlencoded({ extended: true }));
const path=require('path');
const ejsmate=require('ejs-mate');
const flash=require('connect-flash');
const session=require('express-session');

//Setting Up mongoose
async function main() {
    await mongoose.connect('mongodb://localhost:27017/BitDev');
}

main()
    .then(() => {
        console.log('Connected!');
    })
    .catch((err) => {
        console.log('Error in Connection!');
        console.log(err);
    });


//setting up ejs for use and path for files
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//For adding static file's like css and images etc
app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log('listning!');
});

//setting up sessions
app.use(session({ secret: 'Bit Dev', resave: true, saveUninitialized: true }));

//Setting up Flash messages
app.use(flash());




//passport Initaliazation[For Auth]
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrat(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//For accessing flashes
app.use((req, res, next) => {
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.user=req.user;
    next();
});

// For checking Login

const checkLogin=function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'You Must be Logged In');
    res.redirect('/login');
}

//register and login routes

app.get('/', (req, res) => {
    // res.send('Home!');
    res.render('frontpage');
});

app.get('/selectPage', checkLogin, (req, res, next) => {
    // console.log(res.locals);
    // console.log(req.user);
    res.render('SelectPage');
});

app.get('/register', async (req, res, next) => {
    res.render('users/registration');
});


app.post('/register', async (req, res, next) => {
    try {
        if (req.body.password!=req.body.cpass) {
            res.redirect('/register');
        }
        const user=new User(
            {
                username: req.body.username,
                email: req.body.email,
                displayname: req.body.firstname+req.body.lastname,
                collegename: req.body.collegename,
                cfhandle: req.body.codeforces,
                cchandle: req.body.codechef,
                description: req.body.description
            }
        );
        // console.log(req.body);
        // console.log(newUser, req.body);

        const regUser=await User.register(user, req.body.password);

        console.log(regUser);

        req.logIn(regUser, (err) => {
            if (err) {
                console.log(err);
                req.flash('error', err.message);
                res.redirect('/login');
            }
        });
        req.flash('success', 'Successfully Registered!');
        const curUser=regUser;
        // console.log(curUser);
        res.redirect('/selectPage');
    }
    catch (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('/register');
    }
});

app.get('/login', (req, res, next) => {
    res.render('users/login');
});

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res, next) => {
    // res.send('Login OK!');
    // console.log(req.user);
    req.flash('success', 'Welcome Back!');
    res.redirect('/selectPage');
});

app.get('/logout', (req, res, next) => {
    req.logOut();
    req.flash('success', 'Aloha! See You Soon');
    res.redirect('/');
});

//User Personal Routes

app.get('/users/:id', checkLogin, async (req, res, next) => {

    let { id }=req.params;
    const user=await User.findById(id)
        .populate(
            {
                path: 'posts'
            }
        )
        .populate(
            {
                path: 'friends'
            }
        );
    res.send(user);
    // this is the real One res.render('/users/profile', { user });
});

app.get('/users/:id/edit', checkLogin, async (req, res, next) => {
    let { id }=req.params;
    const user=await User.findById(id);
    res.render('users/edit', { user });
});

app.put('/users/:id', checkLogin, async (req, res, next) => {

    let { id }=req.params;
    let changes=req.body;
    let user=await User.findByIdAndUpdate(id, changes, { new: true, runValidators: true });
    console.log(user);
    res.redirect(`/users/${id}`);

});

app.delete('/users/:id', checkLogin, async (req, res, next) => {
    try {
        let { id }=req.params;
        const user=findById(id);
        for (let i=0; i<user.posts.length; i++) {
            await Post.findByIdAndDelete(user.posts[i].id);
        }
        await User.findByIdAndDelete(id);
        req.user=null;
        req.flash('success', 'Successfully Deleted User');
        res.redirect('/');
    }
    catch (err) {
        req.flash('error', err.message);
        res.redirect(`/users/${id}`);
    }
});

// Post Routes CRUD

app.get('/posts/new', checkLogin, (req, res, next) => {
    res.render('posts/create');
});

app.post('/posts', checkLogin, async (req, res, next) => {
    try {
        const user=await User.findById(req.user.id);
        // res.send(user);
        const post=new Post(req.body);
        post.author=user.id;
        post.likes=0;
        post.datePosted=new Date();
        await post.populate('author');
        user.posts.push(post);
        await post.save();
        await user.save();
        res.send('OK!');
        // console.log(post, user);
        // req.flash('success', 'Posted Successfully!');
        // res.redirect(`/users/${user.id}`);
    }
    catch (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('/posts/new');
    }
});

app.get('/posts/:id', checkLogin, async (req, res, next) => {
    let { id }=req.params;
    const post=await Post.findById(id)
        .populate('author');
    res.send(post);
    // res.render('posts/displatPost', { post });
});

app.get('/posts/:id/edit', checkLogin, async (req, res, next) => {
    let { id }=req.params;
    const post=await Post.findById(id).populate('author');
    if (post.author.id!=req.user.id) {
        req.flash('error', 'You Cant Edit Others Posts');
        res.redirect(`/posts/${id}`);
    }
    res.render('posts/edit', { post });
});

app.put('/posts/:id', checkLogin, async (req, res, next) => {
    try {
        let { id }=req.params;
        const post=await Post.findById(id).populate('author');
        if (post.author.id!=req.user.id) {
            req.flash('error', 'You Cant Edit Others Posts');
            res.redirect(`/posts/${id}`);
        }
        const newPost=await Post.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        console.log(newPost);
        req.flash('success', 'Successfully Edited The Post');
        res.redirect(`/posts/${id}`);
    }
    catch (err) {
        req.flash('error', err.message);
        res.redirect(`/posts/${id}/edit`);
    }
});

app.delete('/posts/:id', checkLogin, async (req, res, next) => {
    try {
        let { id }=req.params;
        const post=await Post.findById(id).populate('author');
        if (post.author.id!=req.user.id) {
            req.flash('error', 'You Cant Delete Others Posts');
            res.redirect(`/posts/${id}`);
        }
        const user=await User.findById(post.author.id).populate('posts');
        const index=user.posts.indexOf(post);
        if (index>-1) {
            user.posts.splice(index, 1);
        }
        await Post.findByIdAndDelete(id);
        await user.save();
        req.flash('success', 'Successfully Deleted The Post');
        res.redirect('/selectionPage');
    }
    catch (err) {
        req.flash('error', err.message);
        res.redirect(`/posts/${id}`);
    }
});
