const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
// const router = require("./routes");
const app = express();

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use("/", router);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/card", {
  useCreateIndex: true,
  useNewUrlParser: true,
});

app.get("/api/welcome", (req, res) => {
  res.json({
    message: "Welcome to a Full Stack App",
  });
});

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
