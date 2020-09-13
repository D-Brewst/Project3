const mongoose = require("mongoose");
const db = require("../models");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/card", {
  useCreateIndex: true,
  useNewUrlParser: true,
});
// This file empties the Books collection and inserts the books below
const messageSeed = [
  //============================================================================
  // Birthday
  //============================================================================
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to you! Hope that you soend your day doing the things you love with the people you value most",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to my (insert relation), hope you have a wonderful day!",
  },
  {
    occasion: "Birthday",
    text: "Another trip around the sun, Happy Birthday!",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday! Another fabulous year in the books! ",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to you! Hope that you soend your day doing the things you love with the people you value most",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to my (insert relation), hope you have a wonderful day!",
  },
  {
    occasion: "Birthday",
    text: "Another trip around the sun, Happy Birthday!",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday! Another fabulous year in the books! ",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to you! Hope that you soend your day doing the things you love with the people you value most",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to my (insert relation), hope you have a wonderful day!",
  },
  {
    occasion: "Birthday",
    text: "Another trip around the sun, Happy Birthday!",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday! Another fabulous year in the books! ",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to you! Hope that you soend your day doing the things you love with the people you value most",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to my (insert relation), hope you have a wonderful day!",
  },
  {
    occasion: "Birthday",
    text: "Another trip around the sun, Happy Birthday!",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday! Another fabulous year in the books! ",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to you! Hope that you soend your day doing the things you love with the people you value most",
  },
  {
    occasion: "Birthday",
    text:
      "Happy Birthday to my (insert relation), hope you have a wonderful day!",
  },
  {
    occasion: "Birthday",
    text: "Another trip around the sun, Happy Birthday!",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday! Another fabulous year in the books! ",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday to you! Hope that you soend your day doing the things you love with the people you value most",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday to my (insert relation), hope you have a wonderful day!",
  },
  {
    occasion: "Birthday",
    text: "Another trip around the sun, Happy Birthday!",
  },
  {
    occasion: "Birthday",
    text: "Happy Birthday! Another fabulous year in the books! ",
  },

  //============================================================================
  // Hanukkah 
  //============================================================================
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
    text: "Dreidel, Dreidel, Dreidel I made you out of my clay. When it's dry and ready, oh dreidel I shall play! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "It's a miracle that I ate eight donuts, I thought I could only eat one! Happy Hanukkah!",
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
    occasion: "Hanukkah",
    text: "You're not dry and ready?!?! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Seasons Eating, to you and your family! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "More Gelt, Less Guilt! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Deck the Hall with boughs and challahs! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text:
      "My secret to a happy, stress-free Christmas... I'm Jewish! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text:
      "I want a Christmas tree for Hanukkah! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Every Hanukkah we eat fried food, we gamble and light things on fire. It's like we live in the south! Happy Hannukah!",
  },
  {
    occasion: "Hanukkah",
    text: "Fo-gelt about it! Happy Hannukah!",
  },
  {
    occasion: "Hanukkah",
    text: "Gelt in your mouth, not in your hands! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "If your cell phone was on 10%, but lasted for 8 straight days... Now you know what Hanukkah is all about!",
  },
  {
    occasion: "Hanukkah",
    text: "Drop it like it's top! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Hanukkah Mazel Toes to you and your family!",
  },
  {
    occasion: "Hanukkah",
    text:
      "You spin me right round! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text:
      "Gimmel all your lovin'! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Hope your Hanukkah isn't dreidfull!",
  },
  {
    occasion: "Hanukkah",
    text: "Happy Hanukkah from Dr. Dre-idel!",
  },

  //============================================================================
  // Valentine 
  //============================================================================
  {
    occasion: "Valentine",
    text: "Be mine. Happy Valentine's day.",
  },
  {
    occasion: "Valentine",
    text: "You're the best girlfriend that a man can ask for. Happy Valentine's Day.",
  },
  {
    occasion: "Valentine",
    text: "",
  },
  {
    occasion: "Valentine",
    text: "Something possessed me to send you a card. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "Want to hear some skeleton puns? They're very humerus! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "I have a few vampire puns, but they suck. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "Ghosts make the best cheerleaders. They have lots of spirit! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Your costume is so realistic, it's un-candy! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Oh my gourdness, it's finally Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "One witch told another witch, 'I want one of those new computers that has a spell checker.'Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "I'm glad to have you as my ghoul-friend this Valentine. Happy Valentine (for a girlfriend)!.",
  },
  {
    occasion: "Valentine",
    text: "From my crypt to yours. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Something possessed me to send you a card. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "Want to hear some skeleton puns? They're very humerus! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "I have a few vampire puns, but they suck. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "Ghosts make the best cheerleaders. They have lots of spirit! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Your costume is so realistic, it's un-candy! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Oh my gourdness, it's finally Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "One witch told another witch, 'I want one of those new computers that has a spell checker.'Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "I'm glad to have you as my ghoul-friend this Valentine. Happy Valentine (for a girlfriend)!.",
  },
  {
    occasion: "Valentine",
    text: "From my crypt to yours. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Something possessed me to send you a card. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "Want to hear some skeleton puns? They're very humerus! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "I have a few vampire puns, but they suck. Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text:
      "Ghosts make the best cheerleaders. They have lots of spirit! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Your costume is so realistic, it's un-candy! Happy Valentine!",
  },
  {
    occasion: "Valentine",
    text: "Oh my gourdness, it's finally Valentine!",
  },

  //============================================================================
  // Christmas
  //============================================================================
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
