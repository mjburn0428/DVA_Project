require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const cors = require('cors');
const { auth } = require('express-openid-connect');

const port = process.env.PORT || 8080;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET, // Ensure this is set in the environment variables
  baseURL: process.env.BASE_URL || 'https://dva-project.onrender.com',
  clientID: process.env.CLIENT_ID, // Ensure this is set in the environment variables
  issuerBaseURL: process.env.ISSUER_BASE_URL // Ensure this is set in the environment variables
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use(bodyParser.json());
app.use(cors());

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Routes
app.use('/', require('./routes/pilots'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});