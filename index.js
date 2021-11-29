const express=require('express');
const mongoose=require('mongoose');
const passport=require('passport');
const app=express();
const localStrat=require('passport-local');
const User=require('./models/schemauser');
app.use(express.urlencoded({ extended: true }));
const path=require('path');
const ejsmate=require('ejs-mate');

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
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('listning!');
});


//passport Initaliazation[For Auth]
app.use(passport.initialize());
passport.use(new localStrat(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




//register and login routes

app.get('/', (req, res) => {
    res.render('frontpage');
});

app.get('/register', async (req, res, next) => {
    res.render('/users/registration');
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
        console.log(req.body);
        // console.log(newUser, req.body);

        const regUser=await User.register(user, req.body.password);

        console.log(regUser);

        req.logIn(regUser, (err) => {
            if (err) {
                console.log(err);
                res.send("Error While Logging In!");
            }
        });
        res.redirect('/selectOption');
    }
    catch (err) {
        console.log(err);
        res.redirect('/register');
    }
});

app.get('/login', (req, res, next) => {
    res.render('/users/login');
});

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res, next) => {
    res.redirect('/selectionPage');
});