const express = require('express');
const multer = require('multer');
const fs = require("fs");
var path = require('path');
require("./conn");
const User = require("./models/userdetail")
const Image = require("./models/imagedetails")
const Registration = require("./models/registeruser")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { error } = require('console');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('uploads'));


var Email
 
var storage = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, './uploads');
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname+".png");
    }
});

var decrypt = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, './uploads/decrypt');
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname+".png");
    }
});

const upload = multer({storage:storage});


app.post('/SEDSuite/images',upload.single('profile'), (req, res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var obj = {
            contentType: req.file.mimetype,
            data: Buffer(encode_image,'base64')
    };
    Image.create(obj, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            console.log("saved to database")
            res.redirect('/SEDSuite/images');
        }
    });
});
app.post('/SEDSuite/images/decrypt',upload.single('decrypt'), (req, res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var obj = {
            contentType: req.file.mimetype,
            data: Buffer(encode_image,'base64')
    };
    Image.create(obj, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            console.log("saved to database")
            res.redirect('/SEDSuite/images');
        }
    });
});

app.get('SEDSuite/images/:id', function (req, res, next) {

    Image.findById({_id}, function (err, image) {
    
    if (err) return next(err);
    
    res.send(image.data.buffer);
    res.redirect("/")
    
    });
    
    });

app.get('/SEDSuite/image/', (req, res) => {
    res.send('./RestfulApi/uploads/test1.jpg',{root: __dirname});
    })

app.post("/SEDSuite", (req, res) => {
    console.log(req.body);
    const send = new User(req.body)
    send.save().then(()=>{
        res.status(201).send(send)
    }).catch((e) => {
        res.status(400).send(e);
    })
})


app.get('/SEDSuite/home', async(req,res) => {
    try{
        if(Email){
            const Username = await Registration.findOne({Email:Email});
            res.send({id:"123", key:Username.Name});
            
        }
        else{
            res.json({status:"400"});
        }
        
    }
    catch(error){
        res.send(error);
    }
});
app.get('/SEDSuite/notifications', async(req,res) => {
    try{
    res.send({message:"ALT technologies,welcome you"});    
    }
    catch(error){
        res.send(error);
    }
});
app.get('/SEDSuite/home1', async(req,res) => {
    try{
        if(Email){
            const Username = await Registration.findOne({Email:Email});
            
            res.send({message: "Login Successfull"});
        }
        else{
            res.json({status:"400"});
        }
        
    }
    catch(error){
        res.send(error);
    }
});

app.post('/SEDSuite/registerUser', async(req,res) => {
    try{
        console.log(req.body);
        const register = new Registration({
        Name : req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
    })
    if(!register.Name || !register.Email || !register.Password){
        return res.json({message:"All fields are required"});
    }
        const token = await register.generateAuthToken();
        console.log("my"+ token);

        res.cookie("jwt", token, {
            expires:new Date(Date.now() + 30000),
            httpOnly:true
        });
        console.log(cookie);
        const registered = await register.save();
        res.json({messages:"Registered Successfully"});
    } catch(e) {
        res.status(400).send(e);
    }
})

app.post('/SEDSuite/login', async(req,res)=>{
    try{
        console.log(req.body);
        Email = req.body.Email;
        const Password = req.body.Password;
        const Userdetail = await Registration.findOne({Email:Email});
        const isMatch = await bcrypt.compare(Password, Userdetail.Password);

        token = await Userdetail.generateAuthToken();
        console.log(token);
        if(isMatch){
            return res.status(201).send(req.body);
        }
        else{
            console.log("invalid username password")
            return res.json({status:"400", message:"Invalid Credentials"});
            
           
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/SEDSuite", async (req,res)=>{

    try{
        const data = await User.find({}).sort({_id:-1}).limit(1);
        if(!data){
            return res.status(404).send();
        }else{
            console.log(data[0].message);
            res.send(data[0]);
        }
        
    }catch(e){
        res.send(e);
    }
})

app.get("/SEDSuite/:id", async (req,res)=>{

    try{
        const _id = req.params.id;
        const dataset = await User.findById(_id)
        if(!dataset){
            return res.status(404).send();
        }else{
            res.send(dataset);
        }
    }catch(e){
        res.send(e);
    }
})

app.listen(port, '0.0.0.0', ()=> {
    console.log(`Your Connection is setup at ${port}`);
})
