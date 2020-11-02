const db = require("../models");

module.exports = {
    newCustomer: async (req, res) => {
      try {
        const { firstName, lastName, email, postalCode, dateOfBirth, address1, address2, city, state, ssn } = req.body;
        console.log("first", firstName, "last", lastName, "email", email);
        const customer = await db.Customer.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          postalCode: postalCode,
          dateOfBirth: dateOfBirth,
          address1: address1,
          address2: address2,
          city: city,
          state: state,
          ssn: ssn
        });
  
        res.json(customer);
      } catch (err) {
        console.log("err", err);
      }
    },
  };