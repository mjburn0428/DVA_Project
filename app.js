require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json()).use(cors()).use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
