"use strict";

const Profile = require("../models/profile.js");

//show gets a single profile by _id
module.exports.show = (req, res, err) => {
  Profile
    .findOne(req.body.id)
    .then(prof => {
      res.send(prof)
    })
    .catch(err);
};

//index finds all profiles on the server
module.exports.index = (req, res, err) => {
  Profile
    .find({})
    .then(profs => {
      res.send(profs)
    })
    .catch(err);
};

//create makes a new profile
module.exports.create = (req, res, err) => {
  Profile
    .create(req.body)
    .then(prof => res.json(prof))
    .catch(err);
};
