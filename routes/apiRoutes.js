const Router = require("express").Router();
const userController = require("../controllers/userController");
const customerController = require("../controllers/customerController");

// routes that we want to protect
Router.route("/users").post(userController.createNew);

Router.route("/customers").post(customerController.newCustomer);

Router.use("/messages", require("../controllers/messageController"));

module.exports = Router;
