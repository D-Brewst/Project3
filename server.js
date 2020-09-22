const express = require("express");
const plaid = require("plaid");
const db = require("./models");
const app = express();
const session = require("express-session");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const passport = require("./authentication/passport.js");
const bodyParser = require("body-parser");
const dwolla = require("dwolla-v2");
var dwollaClient = require("dwolla-v2").Client;

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

const client = new dwollaClient({
  key: process.env.appKey,
  secret: process.env.appSecret,
  environment: 'sandbox' // optional - defaults to production
});

console.log(plaidClient);

var requestBody = {
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@nomail.net",
  type: "personal",
  address1: "99-99 33rd St",
  city: "Some City",
  state: "NY",
  postalCode: "11101",
  dateOfBirth: "1970-05-01",
  // For the first attempt, only the
  // last 4 digits of SSN required
  // If the entire SSN is provided,
  // it will still be accepted
  ssn: "4321",
};

// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/card", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routes = require("./routes");
const { I } = require("ts-toolbelt");
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
app.post('/item/public_token/exchange', async function(request, response, next) {
  console.log("req body:", request.body);
  const public_token = request.body.public_token;
  const accountId = request.body.accountId;
  console.log("account-id", accountId);
  await plaidClient.exchangePublicToken(public_token, function(error, response) {
    if (error != null) {
      console.log('Could not exchange public_token!' + '\n' + error);
      return response.json({error: msg});
    }

    // Store the access_token and item_id in your database
    ACCESS_TOKEN = response.access_token;
    ITEM_ID = response.item_id;

    console.log('Access Token: ' + ACCESS_TOKEN);
    console.log('Item ID: ' + ITEM_ID);
    plaidClient.createProcessorToken(
      ACCESS_TOKEN,
      accountId,
      'dwolla',
      function(err, res) {
        console.log(res);
        const processorToken = res.processor_token;
        client.post("customers", requestBody).then((res) => res.headers.get("location"));
        const customerUrl ='https://api-sandbox.dwolla.com/customers/9bb03d15-ad0a-470f-b853-ee6e5431b580';
        client.get("https://api-sandbox.dwolla.com/customers/9bb03d15-ad0a-470f-b853-ee6e5431b580").then(res => console.log(res.body));
        var fundBody = {
          plaidToken: `${processorToken}`,
          name: "Jane Doe’s Savings",
        };
        client.post(`${customerUrl}/funding-sources`, fundBody).then((res) => res.headers.get("location")); // => 'https://api-sandbox.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31'
      }
    );  
  });
});

 // => 'https://api-sandbox.dwolla.com/customers/FC451A7A-AE30-4404-AB95-E3553FCD733F'
// "https://api-sandbox.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C"
// processor-sandbox-7de194a4-81dd-4d7c-82f4-6d81eb5bb31c

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
