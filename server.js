const express = require("express");
const plaid = require("plaid");
const db = require("./models");
const app = express();
const session = require("express-session");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const passport = require("./authentication/passport.js");
const bodyParser = require("body-parser");

dotenv.config();

console.log("Client:", process.env.PLAID_CLIENT_ID);
console.log("Secret:", process.env.PLAID_SECRET_SANDBOX);

// Configure body parsing for AJAX requests
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.urlencoded({
  extended: true
}))

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

app.post('/create_link_token', async function(request, response, next) {
  // 1. Grab the client_user_id by searching for the current user in your database
  console.log(request);
  const userEmail = request.body.email;
  const user = await db.User.find({"email" : userEmail})
  console.log("user:", user);
  const clientUserId = user[0]._id;
  // 2. Create a link_token for the given user
  plaidClient.createLinkToken({
    user: {
      client_user_id: clientUserId,
    },
    client_name: 'WyldCard',
    products: ['auth'],
    country_codes: ['US'],
    language: 'en',
    webhook: 'https://sample.webhook.com',
  }, (err, res) => {
    const link_token = res.link_token;

    // 3. Send the data to the client
    response.json( { link_token } );
  });
});

// Accept the public_token sent from Link
app.post('/get_access_token', function(request, response, next) {
  console.log(request);
  const public_token = request.body.public_token;
  const accountId = request.body.accountId;
  console.log("account-id", accountId);
  
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
    plaidClient.exchangePublicToken(public_token, function(err, res) {
    const accessToken = res.access_token;
    // Create a processor token for a specific account id.
    plaidClient.createProcessorToken(
      accessToken,
      accountId,
      'dwolla',
      function(err, res) {
        const processorToken = res.processor_token;
      }
    );
  });
});

// Exchange the public_token from Plaid Link for an access token.
// plaidClient.exchangePublicToken(public_token, function(err, res) {
//   const accessToken = res.access_token;
//   // Create a processor token for a specific account id.
//   plaidClient.createProcessorToken(
//     accessToken,
//     accountId,
//     'dwolla',
//     function(err, res) {
//       const processorToken = res.processor_token;
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
