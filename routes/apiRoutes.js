const Router = require("express").Router();
const userController = require("../controllers/userController");

// routes that we want to protect
Router.route("/users")
  .post(userController.createNew)

module.exports = Router;