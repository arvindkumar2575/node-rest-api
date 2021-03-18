const mongoose = require("mongoose");
require("dotenv/config");

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.log("Database connected");
  },
  (err) => {
    console.log("Error in DB");
  }
);

require("../models/task");
