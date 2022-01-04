const User=require('../models/schemauser');
const Post=require('../models/schemapost');
const express=require('express');

module.exports.renderEdit=async (req, res, next) => {
    let { id }=req.params;
    const curuser=await User.findById(id);
    res.render('users/edit', { curuser });
}

module.exports.getFriends=async (req, res, next) => {
    let { id }=req.params;
    const curuser=await User.findById(id)
        .populate(
            {
                path: 'posts'
            }
        )
        .populate(
            {
                path: 'friends'
            }
        );
    // res.send(user);
    res.render('users/friends', { curuser });
    // this is the real One res.render('/users/profile', { user });
}

module.exports.profile=async (req, res, next) => {

    let { id }=req.params;
    const curuser=await User.findById(id)
        .populate(
            {
                path: 'posts'
            }
        )
        .populate(
            {
                path: 'friends'
            }
        );
    // res.render;
    console.log(curuser);
    res.render('users/profilepage', { curuser });
}

module.exports.edit=async (req, res, next) => {
    let { id }=req.params;
    let changes=req.body;
    let user=await User.findByIdAndUpdate(id, changes, { new: true, runValidators: true });
    console.log(user);
    res.redirect(`/users/${id}`);
}

module.exports.delete=async (req, res, next) => {
    try {
        let { id }=req.params;
        const user=findById(id);
        for (let i=0; i<user.posts.length; i++) {
            await Post.findByIdAndDelete(user.posts[i].id);
        }
        await User.findByIdAndDelete(id);
        req.user=null;
        req.flash('success', 'Successfully Deleted User');
        res.redirect('/');
    }
    catch (err) {
        req.flash('error', err.message);
        res.redirect(`/users/${id}`);
    }
}