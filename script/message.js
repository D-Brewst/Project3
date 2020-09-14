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
    text: "I want a Christmas tree for Hanukkah! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text:
      "Every Hanukkah we eat fried food, we gamble and light things on fire. It's like we live in the south! Happy Hannukah!",
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
    text:
      "If your cell phone was on 10%, but lasted for 8 straight days... Now you know what Hanukkah is all about!",
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
    text: "You spin me right round! Happy Hanukkah!",
  },
  {
    occasion: "Hanukkah",
    text: "Gimmel all your lovin'! Happy Hanukkah!",
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
    text:
      "I may not always say it but know that I love you with all my heart, Happy Valentine's Day!",
  },
  {
    occasion: "Valentine",
    text:
      "No matter how dark the days get, you still know how to make me smile. Happy Valentine's day.",
  },
  {
    occasion: "Valentine",
    text: "I love you soooooo much. Happy Valentine's Day.",
  },
  {
    occasion: "Valentine",
    text:
      "When you kiss me, the world just melts away. When you hold me in your arms, I feel safe. Being in love with you has made me see how wonderful life can be. I love you.",
  },
  {
    occasion: "Valentine",
    text: "Be mine. Happy Valentine's day.",
  },
  {
    occasion: "Valentine",
    text:
      "I never thought I could fall as hard as I did with you. Happy Valentine's Day!",
  },
  {
    occasion: "Valentine",
    text: "With you, I've found home!",
  },
  {
    occasion: "Valentine",
    text:
      "Happy Valentine’s Day — you’re my happily-ever-after, my forever love, and the hero of my heart. I love you.",
  },
  {
    occasion: "Valentine",
    text: "You are so amazing, I don't know what I would do without you.",
  },
  {
    occasion: "Valentine",
    text: "Even after all this time, you still take my breath away.",
  },
  {
    occasion: "Valentine",
    text: "I don't know what my future holds but I know I want you in it.",
  },
  {
    occasion: "Valentine",
    text:
      "You're my best friend and my partner in crime. Thank you so much for being you.",
  },
  {
    occasion: "Valentine",
    text:
      "To my best friend this Valentine's Day, I couldn't ask for someone who loves and supports me more than you do",
  },
  {
    occasion: "Valentine",
    text:
      "To another Valentine's Day spent with the love of my life, and to many more.",
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
    text: "I love you and I love us! Happy Valentine's Day'",
  },
  {
    occasion: "Valentine",
    text: "You make my heart flutter, Happy Valentine's Day!",
  },
  {
    occasion: "Valentine",
    text:
      "I never truly liked Valentine's Day till I met you. Now I understand what it is all about, Happy Valentine's Day!",
  },
  {
    occasion: "Valentine",
    text:
      "I'm glad to have you as my friend this Valentine. Happy Valentine's Day (for a friend)!.",
  },
  {
    occasion: "Valentine",
    text: "Happy Valentine's Day to my world, my rock and my soulmate!",
  },
  {
    occasion: "Valentine",
    text: "Happy Valentine's Day my love!",
  },
  {
    occasion: "Valentine",
    text: "You make my heart sing! Happy Valentine's Day!",
  },
  {
    occasion: "Valentine",
    text:
      "I am so grateful to have you in my life, as a partner and as a friend. Everday is Valentine's Day with you!",
  },
  {
    occasion: "Valentine",
    text:
      "Happy Valentine's Day! Love you to the moon and back — and with technology, maybe even to Mars and back someday, too. (That’s like, way more.)",
  },
  {
    occasion: "Valentine",
    text:
      "Happy Valentine's Day to the most important person in my life, thank you for your patience and boundless love",
  },
  {
    occasion: "Valentine",
    text: "I would travel to the moon and back just to see you smile",
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
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
