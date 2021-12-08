const User=require('../models/schemauser');
const express=require('express');
const passport=require('passport');

module.exports.renderLogin=(req, res) => {
    res.render('users/login');
}

module.exports.renderRegister=(req, res) => {
    res.render('users/register');
}

module.exports.register=async (req, res, next) => {
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
}

module.exports.login=async (req, res, next) => {
    req.flash('success', 'Welcome Back!');
    res.redirect('/selectPage');
}

module.exports.logout=(req, res, next) => {
    req.logOut();
    req.flash('success', 'Aloha! See You Soon');
    res.redirect('/');
}