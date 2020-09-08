const db = require("../models");

module.exports = {
  createNew: async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = await db.User.create({
      username: username,
      email: email,
      password: password,
    });

    res.json(newUser);
  },
};
