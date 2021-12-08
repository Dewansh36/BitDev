const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');
const router=express.Router();
const loginController=require('../controllers/loginController');
const passport=require('passport');
const checkLogin=require('../middleware/checkLogin');

router.route('/register')
    .get(loginController.renderRegister)
    .post(loginController.register);

router.route('/login')
    .get(loginController.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), loginController.login);

router.route('/logout')
    .get(checkLogin, loginController.logout);


module.exports=router;