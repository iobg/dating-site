'use strict';

const { Router }= require('express')
const router=Router()
const multer=require('multer')
const upload=multer({dest:'images/'})
const imgur = require('imgur')
const fs = require('fs')

const uploadImage = require('../controllers/imageupload')
imgur.setClientId('9317d730bdae0e9')

router.post('/api/imageupload', upload.single('avatar'), (req,res,next)=>{
	let imagePath = `../images/${req.file.filename}`
	fs.renameSync(imagePath,`${imagePath}.${req.file.mimetype.slice(6)}`) 
	imgur.uploadFile(`../images/${req.file.filename}.${req.file.mimetype.slice(6)}`)
	.then(json=>{
		console.log(json.data.link)
	})
	.catch(console.error)
})

module.exports=router;
