const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');
const multer=require('multer');


module.exports.renderCreate=(req, res, next) => {
    res.render('posts/create');
}

module.exports.renderEdit=async (req, res, next) => {
    let { id }=req.params;
    const post=await Post.findById(id).populate('author');
    if (post.author.id!=req.user.id) {
        req.flash('error', 'You Cant Edit Others Posts');
        res.redirect(`/posts/${id}`);
    }
    res.render('posts/edit', { post });
}

module.exports.view=async (req, res, next) => {
    let { id }=req.params;
    const post=await Post.findById(id)
        .populate('author');
    res.send(post);
    // res.render('posts/displatPost', { post });
}

module.exports.create=async (req, res, next) => {
    try {
        const user=await User.findById(req.user.id);
        // res.send(user);
        const post=new Post(req.body);
        post.author=user.id;
        post.likes=0;
        post.datePosted=new Date();
        for (let file of req.files) {
            let obj={
                url: file.path,
                filename: file.filename
            }
            post.images.push(obj);
        }
        await post.populate('author');
        user.posts.push(post);
        await post.save();
        await user.save();
        console.log(post, user);
        req.flash('success', 'Posted Successfully!');
        res.redirect(`/posts/${post.id}`);
    }
    catch (err) {
        console.log(err);
        req.flash('error', err.message);
        res.redirect('/posts/new');
    }
}

module.exports.edit=async (req, res, next) => {
    try {
        let { id }=req.params;
        const post=await Post.findById(id).populate('author');
        if (post.author.id!=req.user.id) {
            req.flash('error', 'You Cant Edit Others Posts');
            res.redirect(`/posts/${id}`);
        }
        const newPost=await Post.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        console.log(newPost);
        req.flash('success', 'Successfully Edited The Post');
        res.redirect(`/posts/${id}`);
    }
    catch (err) {
        req.flash('error', err.message);
        res.redirect(`/posts/${id}/edit`);
    }
}

module.exports.delete=async (req, res, next) => {
    try {
        let { id }=req.params;
        const post=await Post.findById(id).populate('author');
        if (post.author.id!=req.user.id) {
            req.flash('error', 'You Cant Delete Others Posts');
            res.redirect(`/posts/${id}`);
        }
        const user=await User.findById(post.author.id).populate('posts');
        const index=user.posts.indexOf(post);
        if (index>-1) {
            user.posts.splice(index, 1);
        }
        await Post.findByIdAndDelete(id);
        await user.save();
        req.flash('success', 'Successfully Deleted The Post');
        res.redirect('/selectionPage');
    }
    catch (err) {
        req.flash('error', err.message);
        res.redirect(`/posts/${id}`);
    }
}