const mongoose=require('mongoose');
const User=require('../models/schemauser');
const Comment=require('./schemacomment');
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
        techStack: {
            type: String
        },
        images: [
            imageSchema
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        datePosted: {
            type: String,
            default: new Date(Date.now()).toDateString()+" "+new Date(Date.now()).toLocaleTimeString(),
        },
    }
);

const Post=new mongoose.model('Post', postSchema);

module.exports=Post;
