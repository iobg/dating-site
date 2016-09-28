'use strict';
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/user')

passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if(bcrypt.compareSync(password,user.password)){
      	return done(null,user, { message: "Successfully logged in"})
      }
      else{
      	return done(null, false,{message: "Incorrect password"});
      }
      
    });
  }
));



module.exports.create=(req,res,err)=>{

}
