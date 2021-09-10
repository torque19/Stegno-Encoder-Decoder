const mongoose = require("mongoose");
const validator = require("validator");
const imageInputSchema = new mongoose.Schema({
        data:Buffer
        
});

const Image = new mongoose.model('Image', imageInputSchema);
module.exports = Image;