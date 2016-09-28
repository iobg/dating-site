"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./profile.js"));

module.exports = router;
