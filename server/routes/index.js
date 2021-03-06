"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./profile.js"));
router.use(require("./login.js"));
router.use(require('./register.js'))
router.use(require('./logout.js'))
router.use(require('./imageupload.js'))

module.exports = router;
