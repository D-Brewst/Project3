const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("./authentication/passport");

const PORT = process.env.PORT || 4000;
const app = express();

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/card", {
  useCreateIndex: true,
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
