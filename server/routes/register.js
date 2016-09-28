'use strict';

const { Router } = require('express');

const login = require('../controllers/register')

const router = Router()

router.post('/api/register', register.create)

module.exports=router;
