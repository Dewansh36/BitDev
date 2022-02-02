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
    console.log(req.params);
    let { id }=req.params;

    const post=await Post.findById(id)
        .populate('author')
        .populate({
            path: 'comments',
            populate: {
                path: 'author'
            }
        });
    res.render('posts/views', { post });
    return;
}
module.exports.getAllPosts = async (req,res,next)=>{
    const posts= await Post.find().limit(6)

    res.json({
        success: true,
        posts,
        postsCount: 6
    })
}
module.exports.create=async (req, res, next) => {
    console.log(req.user.id)
    console.log(req.body)
    console.log(req.files)
    const user=await User.findById(req.user.id);
    // res.send(user);
    const post=new Post(req.body);
    post.author=user.id;
    // post.likes=Number(0);
    post.datePosted=Date.now();
    // for (let file of req.files) {
    //     let obj={
    //         url: file.path,
    //         filename: file.filename
    //     }
    //     post.images.push(obj);
    // }
    await post.populate('author');
    user.posts.push(post);
    await post.save();
    await user.save();
    console.log(post, user);
    res.send({
        success: true,
        post
    })
}

module.exports.edit=async (req, res, next) => {
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

module.exports.delete=async (req, res, next) => {
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

module.exports.like=async (req, res, next) => {
    let { id }=req.params;
    const post=await Post.findById(id)
        .populate('likes');
    post.likes.push(req.user.id);
    // console.log(post);
    await post.save();
    req.flash(`${post.title} Post Liked`);
    res.redirect(`/posts/${id}`);
}

module.exports.dislike=async (req, res, next) => {
    let { id }=req.params;
    const post=await Post.findById(id);
    let index=post.likes.indexOf(req.user.id);
    post.likes.splice(index, 1);
    console.log(post);
    await post.save();
    req.flash(`${post.title} Post Disliked`);
    res.redirect(`/posts/${id}`);
}