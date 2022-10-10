const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routes/User.Routes");

//middlewares
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use('/user',userRouter)


module.exports = app;

