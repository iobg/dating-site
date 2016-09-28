"use strict";

//Thrid party modules
const express = require("express");
const { json } = require("body-parser");

//clown files
const routes = require("./routes/");
const { connect } = require("./database/database.js");
//constants
const PORT = process.env.PORT || 3000;

//start the express app
const app = express();

//middlewares
app.use(express.static("client"));
app.use(json());

app.use(routes);

//connect to the DB
connect()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Listening on port ${PORT}`);
    )
  })
  .catch(console.error);
