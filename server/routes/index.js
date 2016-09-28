"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./profile.js"));
router.use(require("./login.js"));

module.exports = router;
