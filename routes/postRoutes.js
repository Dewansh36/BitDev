const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');
const router=express.Router();
const postController=require('../controllers/postController');
const checkLogin=require('../middleware/checkLogin');

router.route('/new')
    .get(checkLogin, postController.renderCreate)
    .post(checkLogin, postController.create);

router.route('/:id')
    .get(checkLogin, postController.view)
    .put(checkLogin, postController.edit)
    .delete(checkLogin, postController.delete);

router.route('/:id/edit')
    .get(checkLogin, postController.renderEdit);

module.exports=router;