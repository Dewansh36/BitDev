const mongoose=require('mongoose');
const schema=mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose')
//const autoIncrement=require('mongoose-auto-increment');

// mongoose.set('useCreateIndex', true);

const userSchema=new schema({
    //
    email:
    {
        type: String,
        required: true
    },
    displayname: {
        type: String,
        required: true
    },
    collegename: {
        type: String,
        //required:true
    },
    cfhandle: {
        type: String,
    },
    cchandle:
    {
        type: String,
    }
    description: {
        type: String
    }
});

/*memeSchema.plugin(autoIncrement.plugin,{
    model: 'meme',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});*/

userSchema.plugin(passportLocalMongoose);

const User=new mongoose.model('User', userSchema);

module.exports=User;