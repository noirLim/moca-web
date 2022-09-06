const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  serviceImage:{
    type:String,
    required:true
  },
  inc: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
