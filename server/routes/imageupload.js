'use strict';

const { Router }= require('express')
const router=Router()
const multer=require('multer')
const upload=multer({dest:'images/'})

const uploadImage = require('../controllers/imageupload')

router.post('/api/imageupload', upload.single('avatar'), uploadImage.create)

module.exports=router;
