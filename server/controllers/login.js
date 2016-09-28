'use strict';
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/user')

passport.serializeUser((user,cb)=>cb(null,user.id))
passport.deserializeUser((_id,cb)=> User.findOne({_id},cb))

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
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

module.exports.create=(req,res,next)=>{
  passport.authenticate('local',(err,user,msg)=>{
    if(err){ return next(err)}
    if(!user) {return res.status(400).send(msg)}

      req.logIn(user,err=>{
        if(err){ return next(err)}
        res.status(200).send(msg)
      })
  })(req,res,next)
}
