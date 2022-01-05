const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');
const router=express.Router({ mergeParams: true });
const postController=require('../controllers/postController');
const multer=require('multer');
const { storage }=require('../cloudinary/config');
const upload=multer({ storage });
const catchAsync=require('../middleware/catchAsync');
const checkLogin=require('../middleware/checkLogin');
const postAuth=require('../middleware/postAuth');


router.route('/new')
    .get(checkLogin, postController.renderCreate)
    .post(checkLogin, upload.array('images'), catchAsync(postController.create));

router.route('/:id')
    .get(checkLogin, catchAsync(postController.view))
    .put(checkLogin, postAuth, catchAsync(postController.edit))
    .delete(checkLogin, postAuth, catchAsync(postController.delete));

router.route('/:id/edit')
    .get(checkLogin, postAuth, postController.renderEdit);

module.exports=router;