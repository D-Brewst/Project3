const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("./passport.js");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const db = require("../models");
const userController = require("../controllers/userController");
const plaid = require("plaid");

/* POST login. */
Router.post("/login", function (req, res) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log("user info", user);
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user.toJSON(), "superSecret");
      const { email } = user;
      return res.json({ email, token });
    });
  })(req, res);
});

Router.post("/register", userController.createNew);

const plaidClient = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET_SANDBOX,
  env: plaid.environments.sandbox,
  options: {
    version: '2019-05-29', // '2019-05-29' | '2018-05-22' | '2017-03-08'
  },
});

Router.post('/create_link_token', async function(request, response, next) {
  // 1. Grab the client_user_id by searching for the current user in your database
  const userEmail = request.body.email;
  const user = await db.User.find({"email" : userEmail})
  console.log("user:", user);
  // const usertoken = request.headers.authorization;
  // const token = usertoken.split(' ');
  // const decoded = jwt.verify(token[1], 'superSecret');
  // console.log("decoded:", decoded);
  const clientUserId = user[0]._id;
  // 2. Create a link_token for the given user
  plaidClient.createLinkToken({
    user: {
      client_user_id: clientUserId,
    },
    client_name: 'My App',
    products: ['transactions'],
    country_codes: ['US'],
    language: 'en',
    webhook: 'https://sample.webhook.com',
  }, (err, res) => {
    const link_token = res.link_token;

    // 3. Send the data to the client
    response.json( { link_token } );
  });
});


module.exports = Router;
