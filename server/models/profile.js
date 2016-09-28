"use strict";

const mongoose = require("mongoose");

module.exports = mongoose.model("Profile", {
  name: String,
  clownName: String,
  pictureURL: String,
  bio: String,
  clownStory: String,
  skills: [String],
  favorites: [String]
});
