const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/card");

const messageSeed = [
  {
    occasionid: "1",
    text: "Happy Birthday to you!!!",
  },
  {
    occasionid: "1",
    text: "Hope you have a great day birthday girl/boy",
  },
  {
    occasionid: "2",
    text: "congratulations",
  },
  {
    occasionid: "2",
    text: "congratulations to you",
  },
  {
    occasionid: "3",
    text: "sry",
  },
  {
    occasionid: "2",
    text: "sry 2",
  },
  {
    occasionid: "2",
    text: "sry 2",
  },
];
