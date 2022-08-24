const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// router
const blogRouter = require("./routes/blogRoutes");
const serviceRouter = require("./routes/serviceRoutes")
const productRouter = require("./routes/productRoutes")

// Middleware

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Import routes
app.use("/blog",blogRouter);
app.use("/service",serviceRouter);
app.use("/product",productRouter);


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