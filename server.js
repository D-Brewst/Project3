const express = require("express");
const plaid = require("plaid");
const db = require("./models");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const passport = require("passport");

dotenv.config();

console.log("Client:", process.env.PLAID_CLIENT_ID);
console.log("Secret:", process.env.PLAID_SECRET_SANDBOX);

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const plaidClient = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET_SANDBOX,
  env: plaid.environments.sandbox,
  options: {
    version: '2019-05-29', // '2019-05-29' | '2018-05-22' | '2017-03-08'
  },
});

console.log(plaidClient);

// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/card", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routes = require("./routes");
app.use(routes);

// Create a link_token to initialize Link
app.post('/create_link_token', async function(request, response, next) {
  // Grab the client_user_id by searching for the current user in your database
  const user = await db.User.find({"email": "hebrewhammer@gmail.com"});
  console.log(user[0]);
  const clientUserId = user[0]._id;
  console.log(clientUserId);

  // Create the link_token with all of your configurations
  plaidClient.createLinkToken({
    user: {
      client_user_id: clientUserId,
    },
    client_name: 'My App',
    products: ['transactions'],
    country_codes: ['US'],
    language: 'en',
    webhook: 'https://sample.webhook.com',
  }, function(error, linkTokenResponse) {
    // Pass the result to your client-side app to initialize Link
    response.json({ link_token: linkTokenResponse.link_token });
  });
});

// Accept the public_token sent from Link
app.post('/get_access_token', function(request, response, next) {
  const public_token = request.body.public_token;
  plaidClient.exchangePublicToken(public_token, function(error, response) {
    if (error != null) {
      console.log('Could not exchange public_token!' + '\n' + error);
      return response.json({error: msg});
    }

    // Store the access_token and item_id in your database
    ACCESS_TOKEN = response.access_token;
    ITEM_ID = response.item_id;

    console.log('Access Token: ' + ACCESS_TOKEN);
    console.log('Item ID: ' + ITEM_ID);
    response.json({'error': false});
  });
});

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
