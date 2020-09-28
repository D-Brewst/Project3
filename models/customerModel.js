const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: {
    required: "First name is required",
    type: String,
    trim: true,
    required: "Username is Required",
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last name is required",
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  type: personal,

  address1: {
    type: String,
    required: "This field is required",
  },

  address2: {
    type: String,
  },

  city: {
    type: String,
    required: "This field is required",
  },

  state: {
    type: String,
    required: "This field is required",
  },

  postalCode: {
    type: String,
    required: "This field is required",
    validate: [({ length }) => length = 5, "Please enter your 5 digit postal code."]
  },

  dateOfBirth: {
    type: String,
    required: "This field is required",
  },

  ssn: {
    type: String,
    required: "This field is required",
    validate: [({ length }) => length = 5, "Please enter the last 4 digits of your ssn."]
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;