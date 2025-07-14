const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  sellerName: {
    type: String,
    required: true,
    trim: true,
  },
  sellerAbout: {
    type: String,
    required: true,
    trim: true,
  },
  SellerProfilePic: {
    type: String, // store the image URL or path
    default: "", // optional default value
  },
  sellerEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  sellerPhone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },
  sellerAddress: {
    type: String,
    required: true,
    trim: true,
  },
  sellerPanCard: {
    type: String,
    required: true,
    uppercase: true,
    match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"],
  },
  sellerIFSC: {
    type: String,
    required: true,
    uppercase: true,
    match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"],
  },
  sellerAccountNumber: {
    type: String,
    required: true,
    match: [/^\d{9,18}$/, "Account number must be between 9 to 18 digits"],
  },
  sellerAccountHolder: {
    type: String,
    required: true,
    trim: true,
  },
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
