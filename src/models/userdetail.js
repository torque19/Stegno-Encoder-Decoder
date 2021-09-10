const mongoose = require("mongoose");
const validator = require("validator");
const userInputSchema = new mongoose.Schema({
    message: {
        type:String,
        required:true,
        minlength:1
    },
    Key:{
        type:Number,

    }
})

const User = new mongoose.model('User', userInputSchema);
module.exports = User;