const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');
const router=express.Router({ mergeParams: true });
const loginController=require('../controllers/loginController');
const passport=require('passport');
const checkLogin=require('../middleware/checkLogin');
const catchAsync=require('../middleware/catchAsync');

router.route('/register')
    .get(loginController.renderRegister)
    .post(catchAsync(loginController.register));

router.route('/login')
    .get(loginController.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), loginController.login);

router.route('/logout')
    .get(checkLogin, loginController.logout);

router.route('/forgot')
    .get(loginController.renderForgot)
    .post(loginController.forgot);

router.route('/reset/:token')
    .get(loginController.renderReset)
    .post(loginController.reset);


module.exports=router;