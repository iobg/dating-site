'use strict';

module.exports.destroy=(req,res)=>{
	req.logout()
	res.status(666).send({msg:"You have logged out"})
}
