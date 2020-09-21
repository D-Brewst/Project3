const router = require("express").Router();
const db = require("../models");

router.get("/", async (req, res) => {
  console.log("loaded");
  try {
    const response = await db.Message.find({});
    res.json(response);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
