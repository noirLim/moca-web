const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    prodImage:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Product",productSchema);