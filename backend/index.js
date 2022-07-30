const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/mocaCoffee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });

  app.listen(5000,() =>{
    console.log("Port is running on 5000")
  })