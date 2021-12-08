const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
const checkLogin=require('../middleware/checkLogin');

router.route('/:id')
    .get(checkLogin, userController.profile)
    .put(checkLogin, userController.edit)
    .delete(checkLogin, userController.delete);

router.route('/:id/edit')
    .get(checkLogin, userController.renderEdit);

module.exports=router;