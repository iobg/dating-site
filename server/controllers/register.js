'use strict';

const User = require('../models/user');
const bcrypt = require('bcrypt')

module.exports.create=(req,res,err)=>{

	if(req.body.password===req.body.confirmation){
	User.findOne({email:req.body.email})
	.then(user =>{
		if(user){
			return res.send({msg: "Email is already registered"})
		}
			return new Promise((resolve,reject)=>{
				bcrypt.hash(req.body.password,13,(err,hash)=>{
					resolve(hash)
				})
			}).then(hash=>{
				User.create({email:req.body.email, password:hash})
				res.status(200).send({msg:"User successfully created"})
			})
		})
	}
	
}

