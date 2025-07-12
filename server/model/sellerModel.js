const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A seller must have name"],
  },
  about: {
    type: String,
    required: [true, "A seller must have about"],
  },
});
