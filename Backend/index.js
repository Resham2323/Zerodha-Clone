require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT =process.env.PORT || 8080;
const URL = process.env.MONGO_URL;
console.log(URL);

app.listen(PORT, ()=> {
    console.log("app listening on port 8080");
    mongoose.connect(URL);
    console.log("connected to db");
});