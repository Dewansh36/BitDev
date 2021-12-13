const Post=require("../models/schemapost");
const User=require("../models/schemauser")

const partialSearch=(req, res, next) => {
    let { search }=req.query;
    const postFind=Post.find({ title: { $regex: search, $options: "i" } });
    console.log(postFind);

}