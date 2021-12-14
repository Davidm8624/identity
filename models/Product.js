const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    enum: {
      values: [
        "drivers-license",
        "passport",
        "school-id",
        "bank-info",
        "social-security-card",
        "birth-certificate",
      ]
    }
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
      values: [
        "Black",
        "White",
        "Asian",
        "Other"
      ],
    },
  },
  sex: {
    type: String,
    require: true,
    enum: {
      values: [
        "Male",
        "Female",
      ]
    }
  },  
  id: {
      type: mongoose.Types.ObjectId,
      ref: "ID",
      required: [true, "Please provide your username"],
  }
});

module.exports = mongoose.model("products", productSchema);
