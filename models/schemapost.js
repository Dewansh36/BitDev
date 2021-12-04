const mongoose=require('mongoose');
const User=require('../models/schemauser');
const Schema=mongoose.Schema;

const imageSchema=new Schema(
    {
        url: String,
        filename: String,
    }
);

const postSchema=new Schema(
    {
        title:
        {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        description: {
            type: String,
        },
        likes: {
            type: Number
        },
        images: imageSchema,
    }
);

const Post=new mongoose.model('Post', postSchema);

module.exports=Post;
