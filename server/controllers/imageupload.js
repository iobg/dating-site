'use strict'
const imgur = require('imgur');

imgur.setClientId('9317d730bdae0e9')

module.exports.create=(req,res,next)=>{
	console.log(req.file)
}
