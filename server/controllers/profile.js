"use strict";

const Profile = require("../models/profile.js");


module.exports.show = (req, res) => {
  Profile
    .findOne(req.body.id)
    .then(prof => {
      res.send(prof)
    })
    .catch(err);
};

module.exports.index = (req, res) => {
  Profile
    .find({})
    .then(profs => {
      res.send(profs)
    })
    .catch(err);
};

module.exports.create = (req, res, err) => {
  Profile
    .create(req.body)
    .then(prof => res.json(prof))
    .catch(err);
};
