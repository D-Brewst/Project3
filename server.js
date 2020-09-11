const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://user1:user1@cluster0.091n7.mongodb.net/card?retryWrites=true&w=majority", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
