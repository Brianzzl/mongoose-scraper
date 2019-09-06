//Dependency
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const PORT = process.env.PORT||7000;

// Initialize Express
const app = express();

const db = require("./models");
// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://brian1:password1@ds023495.mlab.com:23495/heroku_6b3rsx89",
  {
    useNewUrlParser:true
  }

);
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds023495.mlab.com:23495/heroku_6b3rsx89";

// mongoose.connect(MONGODB_URI);

require("./controller/scraperControl")(app);


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
