const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRegistrationschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        
    },
    registration_date:{
        type:String,
        default: Date.now,
    },
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]

})

userRegistrationschema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()}, "this is car");
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        console.log(token);
        return token;
    } catch (error) {
        res.send(error);
        console.log(error);

    }
}

userRegistrationschema.pre("save", async function(next){
    if(this.isModified("Password")){
        console.log(`theCurrent is ${this.Password}`);
        this.Password = await bcrypt.hash(this.Password, 10);
        console.log(`theCurrent is ${this.Password}`);
    }
    next();
    
})

const Registration = new mongoose.model("Registration", userRegistrationschema);
module.exports = Registration;