const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  occasion: {
    type: String,
    trim: true,
    required: "Ocassion is Required",
  },

  text: {
    type: String,
    trim: true,
    required: "Text is Required",
    validate: [
      ({ length }) => length <= 10000,
      "Text is capped at 1000 characters",
    ],
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
