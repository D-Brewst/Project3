const mongoose = require("mongoose");
const db = require("../models");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/card", {
  useCreateIndex: true,
  useNewUrlParser: true,
});
// This file empties the Books collection and inserts the books below
const messageSeed = [
  {
    occasion: "birthday",
    text:
      "Happy Birthday to you! Hope that you soend your day doing the things you love with the people you value most",
  },
  {
    occasion: "birthday",
    text:
      "Happy Birthday to my (insert relation), hope you have a wonderful day!",
  },
  {
    occasion: "birthday",
    text: "Another trip around the sun, Happy Birthday!",
  },
  {
    occasion: "birthday",
    text: "Happy Birthday! Another fabulous year in the books! ",
  },
  {
    occasion: "Hanukkah",
    text: "I Love You a Latke!",
  },
  {
    occasion: "Hanukkah",
    text: "May Your Menorah Burn Brighter than your Latkes!",
  },
  {
    occasion: "Hanukkah",
    text: "Keep the 'Han' in HAN-ukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Happy Hanukkah! C'mon baby light my fire!",
  },
  {
    occasion: "Hanukkah",
    text:
      "Dreidel, Dreidel, Dreidel I made you out of my clay. When it's dry and ready, oh dreidel I shall play! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text:
      "It's a miracle that I ate eight donuts, I thought I could only eat one! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Happy Hanuk-kat!",
  },
  {
    occasion: "Hanukkah",
    text: "Happy Challah Days!",
  },
  {
    occasion: "Halloween",
    text:
      "One witch told another witch, 'I want one of those new computers that has a spell checker.'Happy Halloween!",
  },
  {
    occasion: "Halloween",
    text:
      "I'm glad to have you as my ghoul-friend this Halloween. Happy Halloween (for a girlfriend)!.",
  },
  {
    occasion: "Halloween",
    text: "From my crypt to yours. Happy Halloween!",
  },
  {
    occasion: "Halloween",
    text: "Something possessed me to send you a card. Happy Halloween!",
  },
  {
    occasion: "Halloween",
    text:
      "Want to hear some skeleton puns? They're very humerus! Happy Halloween!",
  },
  {
    occasion: "Halloween",
    text: "I have a few vampire puns, but they suck. Happy Halloween!",
  },
  {
    occasion: "Halloween",
    text:
      "Ghosts make the best cheerleaders. They have lots of spirit! Happy Halloween!",
  },
  {
    occasion: "Halloween",
    text: "Your costume is so realistic, it's un-candy! Happy Halloween!",
  },
  {
    occasion: "Halloween",
    text: "Oh my gourdness, it's finally Halloween!",
  },
  {
    occasion: "Christmas",
    text:
      "I hope Santa leaves you a ton of presents, but I hope the reindeers do not leave behind any ~presents~ on your lawn! Merry Christmas!",
  },
  {
    occasion: "Christmas",
    text: "Christmas is Claus for celebration! Merry X-mas!",
  },
  {
    occasion: "Christmas",
    text: "Santa ho ho hopes you've been good this year. Merry Christmas!",
  },
  {
    occasion: "Christmas",
    text:
      "I'm glad to have people like you in my life to send Christmas cards. I am truly blessed this Christmas!",
  },
  {
    occasion: "Christmas",
    text: "It's all fun and games 'till Santa checks the Naughty List.",
  },
  {
    occasion: "Christmas",
    text: "Have a very Merry Christmas and a Happy New Year!",
  },
  {
    occasion: "Christmas",
    text:
      "May your fun be large and bills be small this year. Merry Christmas!",
  },
  {
    occasion: "Christmas",
    text:
      "Santa saw your Facebook – you're getting a dictionary this year! Merry Xmas!",
  },
  {
    occasion: "Christmas",
    text: "All I want for Christmas is you! Merry Christmas!",
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
