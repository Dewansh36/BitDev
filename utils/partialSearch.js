const Post=require("../models/schemapost");
const User=require("../models/schemauser");

const partialSearch=async (search) => {
    const postFind=await Post.find({ title: { $regex: search, $options: "i" } });
    const userFind=await User.find({ username: { $regex: search, $options: "i" } });
    console.log("User:  ");
    console.log(userFind);
    console.log('POsts:  ');
    console.log(postFind);
    return { postFind, userFind };
}

module.exports=partialSearch;