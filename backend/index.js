const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const app = express();

// router
const blogRouter = require("./routes/blogRoutes");

// Middleware

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


// Import routes
app.use("/blog",blogRouter);



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