const mongoose = require('mongoose');

var productschema = mongoose.Schema({
    name : String,
    category: String,
    price:Number,
    count: Number,
    description:String 
});

 var productmodel = mongoose.model("product",productschema);
 module.exports = productmodel;