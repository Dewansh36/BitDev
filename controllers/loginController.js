const User=require('../models/schemauser');
const passport=require('passport');
const localStrat=require('passport-local');
const express=require('express');
const { nanoid }=require('nanoid');
const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport(
    {
        service: 'hotmail',
        auth: {
            user: process.env.email,
            pass: process.env.email_password,
        }
    }
);

module.exports.renderLogin=(req, res) => {
    res.render('users/login');
}

module.exports.renderRegister=(req, res) => {
    res.render('users/registration');
}

module.exports.register=async (req, res, next) => {
    try {
        if (req.body.password!=req.body.cpass) {
            req.flash('error', 'Password And Confirm Password Mismatch!');
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
        if (req.session.returnTo) {
            res.redirect(req.session.returnTo);
        }
        else {
            res.redirect('/selectPage');
        }
    }
    catch (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('/register');
    }
}

module.exports.login=async (req, res, next) => {
    req.flash('success', 'Welcome Back!');
    if (req.session.returnTo) {
        res.redirect(req.session.returnTo);
    }
    else {
        res.redirect('/selectPage');
    }
}


module.exports.renderForgot=(req, res, next) => {
    res.render('users/forgot');
}

module.exports.forgot=async (req, res, next) => {
    const token=nanoid(10);
    const user=await User.findOne({ email: req.body.email });
    if (user==undefined) {
        req.flash('error', 'No account with that email address exists');
        res.redirect('/forgot');
    }
    user.resetPasswordToken=token;
    user.resetPasswordExpires=Date.now()+43200;
    await user.save();
    const resetEmail={
        from: process.env.email,
        to: req.body.email,
        subject: "Password Reset",
        text: `
        You are receiving this because you (or someone else) have requested the reset of the password for your account.
        Please click on the following link, or paste this into your browser to complete the process:
        http://${req.headers.host}/reset/${token}
        If you did not request this, please ignore this email and your password will remain unchanged.
      `,
    }
    transporter.sendMail(resetEmail, (err, info) => {
        if (err) {
            console.log(err);
            res.send('Error While Sending Mail');
        }
        else {
            console.log(info.response);
            req.flash('success', `An e-mail has been sent to ${req.body.email} with further instructions`);
            res.redirect('/forgot');
        }
    })
}

module.exports.renderReset=async (req, res, next) => {
    let { token }=req.params;
    const user=await User.findOne({ resetPasswordToken: token });
    if (!user||user.resetPasswordExpires<Date.now()) {
        req.flash('error', 'Password reset token is invalid or has expired');
        res.redirect('/forgot');
    }
    console.log(user);
    res.render('users/reset', { token });
}

module.exports.reset=async (req, res, next) => {
    if (req.body.password!=req.body.cpass) {
        req.flash('error', 'Both Fields Should Match!');
        res.redirect('/reset');
    }
    let { password }=req.body;
    const user=await User.findOne({ resetPasswordToken: req.params.token });
    console.log(user, password);
    await user.setPassword(password);
    await user.save();
    const resetEmail={
        to: user.email,
        from: process.env.email,
        subject: 'Your password has been changed',
        text: `
        Password Reset Successfull
         This is a confirmation that the password for your account "${user.email}" has just been changed.
          Please Login With New Credentials
        `,
    }
    transporter.sendMail(resetEmail, async (err, info) => {
        if (err) {
            console.log(err);
            res.send('Error While Sending Mail');
        }
        else {
            console.log(info.response);
            user.resetPasswordExpires=null;
            user.resetPasswordToken=null;
            await user.save();
            req.flash('success', 'Password Reset Successfull!');
            res.redirect('/login');
        }
    })
    // if (err) {
    //     req.flash('error', 'Password Reset Failed!');
    //     res.redirect('/forgot');
    // }
    // else {
    //     
    // }

}


module.exports.logout=(req, res, next) => {
    req.logOut();
    req.session.returnTo=null;
    req.flash('success', 'Aloha! See You Soon');
    res.redirect('/');
}