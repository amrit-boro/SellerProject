const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
  password: {
    type: String,
    default: "amrit196",
    required: [true, "Please provide a password"],
    minlength: 8,
    unique: true,
    select: false, // Do not return password in queries
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
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
  startLocation: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
    description: String,
  },
  // locations: [
  //   {
  //     type: {
  //       type: String,
  //       default: "Point",
  //       enum: ["Point"],
  //     },
  //     coordinates: [Number],
  //     address: String,
  //     description: String,
  //     day: Number,
  //   },
  // ],
});

sellerSchema.index({ startLocation: "2dsphere" });

// Pre-save middleware to hash password
sellerSchema.pre("save", async function (next) {
  // only run this function if password was modified
  if (!this.isModified("password")) return next();
  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined; // Remove passwordConfirm after hashing
  next();
});

sellerSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword); // here userPasswrod is the hashed password Stored in the database (already hashed)  ||  // candidatePassword is the password entered by the user during login
};

sellerSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp; // If JWT timestamp is less than changed timestamp, it means password was changed after the token was issued
  }

  // False means NOT changed
  return false;
};

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
