const mongoose = require("mongoose");
const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
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
      ref: "Seller", // Assuming you have a User or Seller model
      required: true,
    },
    location: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: { type: [Number], default: [0, 0] },

      address: { type: String, default: "" },
      description: { type: String, default: "" },
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

productSchema.index({ location: "2dsphere" });

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
