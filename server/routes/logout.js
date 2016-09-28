'use strict'
const { Router }= require('express')

const router = Router()

const Logout = require('../controllers/logout')

router.post('/api/logout', Logout.destroy)

module.exports=router


