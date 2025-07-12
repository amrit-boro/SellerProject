const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      maxlength: [
        40,
        "A product name must have less or equal then 40 character",
      ],
      minlength: [
        10,
        "A product name must have more or equal then 10 character",
      ],
    },
    slug: String,
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
    },
    images: [
      {
        type: String, // URL or file path
      },
    ],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User or Seller model
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("currentDate").get(function () {
  return new Date().toLocaleString();
});

// Document middleware... that run before or after a document-level operation such as .save(), .validate(), or .remove()

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// testing for second middleware running or not .....

// productSchema.pre("save", function (next) {
//   console.log("second middleware....");
//   next();
// });

// // Post middleware.... runs after saving the document!!

// productSchema.post("save", function (doc, next) {
//   console.log(doc);

//   next();
// });

module.exports = mongoose.model("Product", productSchema);
