"use strict";

const { Router } = require("express");

const profile = require("../controllers/profile.js");

const router = Router();

router.post("/api/profiles", profile.create);

module.exports = router;
