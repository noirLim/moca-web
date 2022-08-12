const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  titlePost: {
    type: String,
  },
  content: {
    type: String,
  },
});

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
  post: [postSchema],
});


module.exports = mongoose.model("Blog", blogSchema);
