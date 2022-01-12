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
const methodOverride=require('method-override');
const axios=require('axios');
require('dotenv').config();
const multer=require('multer');
require('dotenv').config();
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

//Setting Up Method Override for Other Requests

app.use(methodOverride('_method'));


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

const checkLogin=require('./middleware/checkLogin');

const partialSearch=require('./utils/partialSearch');
const loginRoutes=require('./routes/loginRoutes');
const userRoutes=require('./routes/userRoutes');
const postRoutes=require('./routes/postRoutes');
const commentRoutes=require('./routes/commentRoutes');

app.get('/', (req, res) => {
    // res.send('Home!');
    res.render('frontpage');
});

app.get('/selectPage', checkLogin, (req, res, next) => {
    // console.log(res.locals);
    // console.log(req.user);
    res.render('SelectPage');
});

//login Routes
app.use('/', loginRoutes);

//User Routes
app.use('/users', userRoutes);

//Posts Routes
app.use('/posts', postRoutes);

// Comments Routes
app.use('/posts/:pid/comments', commentRoutes);

app.get('/cp', checkLogin, async (req, res, next) => {
    const curuser=await User.findById(req.user.id);
    res.render('CP', { curuser });
});

app.get('/project', checkLogin, async (req, res, next) => {

    let posts=[];
    let user=await User.findById(req.user.id)
        .populate({
            path: 'friends',
            populate: {
                path: 'posts'
            }
        });
    for (let frnd of user.friends) {
        posts=posts.concat(frnd.posts);
    }
    const compare=(a, b) => {
        return new Date(b.date)-new Date(a.date);
    }
    posts.sort(compare);
    console.log(posts);
    res.send('Ok!');
})

app.get('/search', async (req, res, next) => {
    const search=req.query.search;
    const findResult=partialSearch(search);
    res.send(findResult);
});

app.use((err, req, res, next) => {
    let { status=500, message="Error Occurred!" }=err;
    console.log(err);
    res.status(status).send(message);
});

app.get('*', (req, res) => {
    res.status(404).send('404 Not Found!');
})