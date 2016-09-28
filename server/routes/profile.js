"use strict";

const { Router } = require("express");

const profile = require("../controllers/profile.js");

const router = Router();

//POST new profile
router.post("/api/profiles", profile.create);
//GET one profile
router.get("/api/profile", profile.show); 
//GET all profiles
router.get("/api/allprofiles", profile.index);

module.exports = router;
