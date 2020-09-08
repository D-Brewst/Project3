const mongoose = require("mongoose");
const db = require("../models");

const databaseUrl = "cards";
const collections = ["messages"];
const db = mongojs(databaseUrl, collections);

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/card");

const messageSeed = [
  {
    occasion: "birthday",
    text: "Happy Birthday to you!!!",
  },
  {
    occasion: "birthday",
    text: "Hope you have a great day birthday girl/boy",
  },
  {
    occasion: "birthday",
    text: "another year woohoo",
  },
  {
    occasion: "birthday",
    text: "hbd",
  },
  {
    occasion: "birthday",
    text: "hbd 2",
  },
  {
    occasion: "birthday",
    text: "hbd 3",
  },
  {
    occasion: "birthday",
    text: "hbd 4",
  },
];

db.Message.remove({})
  .then(() => db.Message.collection.insertMany(messageSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });