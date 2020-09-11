const db = require("../models");
const jwt = require('jsonwebtoken');
const passport = require("passport");

module.exports = {
  createNew: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      console.log("USER", username, "EMAIL", email, "Password", password);
      const newUser = await db.User.create({
        username: username,
        email: email,
        password: password,
      });

      res.json(newUser);
    } catch (err) {
      console.log("err", err);
    }
  },
};

