const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  price: {
    type: Number,
    minimum: 1,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    requird: true,
    enum: {
      values: ["Black", "White", "Asian", "Other"],
    },
  },
  gender: {
    type: String,
    require: true,
    enum: {
      values: ["Male", "Female", "Monkay"],
    },
  },
});

module.exports = mongoose.model("cart", cartSchema);
