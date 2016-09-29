"use strict";

//Thrid party modules
const express = require("express");
const {json, urlencoded} = require("body-parser");

const session = require('express-session');
const passport = require('passport');

const RedisStore = require("connect-redis")(session);


//clown files
const routes = require("./routes/");
const { connect } = require("./database/database.js");
//constants
const PORT = process.env.PORT || 3000;

//start the express app
const app = express();

//middlewares
app.use(express.static("client"));

app.use(json({limit:'50mb'}))
app.use(urlencoded({limit: '50mb', extended:true}));



app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || "redis://localhost:6379"
  }),
  secret: process.env.SESSION_SECRET || 'secretKey',
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())


app.use(routes);

//connect to the DB
connect()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Listening on port ${PORT}`)
    )
  })
  .catch(console.error);
