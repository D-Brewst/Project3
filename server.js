const express = require("express");
const PORT = process.env.PORT || 4000;
// const router = require("./routes");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

// app.use("/", router);

app.get("/api/welcome", (req, res) => {
  res.json({
    message: "Welcome to a Full Stack App"
  })
});

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`)
})