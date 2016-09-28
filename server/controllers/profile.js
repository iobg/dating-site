"use strict";

const Profile = require("../models/profile.js");

module.exports.create = (req, res, err) => {
  Profile
    .create(req.body)
    .then(prof => res.json(prof))
    .catch(err);
}
