const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name "],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "A user must have a email Id"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "A user must have a phone number"],
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },
  passwordConfirm: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

// const testUser = new User({
//   name: "Luku Boro",
//   email: "luku@yahoo.com",
//   phone: 1234,
// });

// testUser
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((error) => {
//     console.log("Error ):", error.message);
//   });

module.exports = User;
