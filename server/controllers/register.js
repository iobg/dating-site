'use strict';

const User = require('../models/user');
const bcrypt = require('bcrypt')

module.exports.create=(req,res,err)=>{
	console.log(req.body)
	if(req.body.password===req.body.confirmaton){
	User.findOne({email:req.body.email})
	.then(user =>{
		if(user){
			return res.send({msg: "Email is already registered"})
		}
		else return new Promise((resolve,reject)=>{
			bcrypt.hash(req.body.password,13,(err,hash)=>{
				if(err) res.send(err)
				resolve(hash);
		})
	}).then(hash=>{
			return User.create({email:req.body.email,password:hash})
	})
	})
}
	else return res.send({msg: "Passwords do not match"});
}
