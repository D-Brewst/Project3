const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const userController = require("../controllers/userController");

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

Router.post('/create_link_token', async function(request, response, next) {
  // 1. Grab the client_user_id by searching for the current user in your database
  const authUser = JSON.parse(localStorage.getItem('authuser'));
  console.log(authUser);
  const user = await User.find();
  const clientUserId = user.id;
  console.log(user);
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
    response.json({ link_token });
  });
});


module.exports = Router;
