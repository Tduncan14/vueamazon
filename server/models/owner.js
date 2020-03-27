const mongoose = require('mongoose');
const schema = mongoose.Schema;


const ownerSchema = new Schema ({
    name:String,
    about:String,
    photo:String
  
})