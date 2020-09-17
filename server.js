const express = require("express");
const plaid = require("plaid");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

dotenv.config();

const plaidClient = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.sandbox,
  options: {
    version: '2019-05-29', // '2019-05-29' | '2018-05-22' | '2017-03-08'
  },
});

console.log(plaidClient);
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/card", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
