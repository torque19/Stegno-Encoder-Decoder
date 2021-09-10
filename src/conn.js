const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/User-details", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Your connection is established");
}).catch((e) =>{
    console.log("Connection cannot be established")
})