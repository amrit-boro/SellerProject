const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  shippingDetails: {
    fullName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    phone: { type: String, required: true },
    address1: { type: String, required: true },
    city: { type: String, required: true, default: "Guwahati" },
    state: { type: String, required: true, default: "Assam" },
    postalCode: { type: String, required: true },
    country: { type: String, required: true, default: "India" },
    purpose: { type: String, required: true },
  },
  paymentMethod: {
    type: String,
    enum: ["Card", "UPI", "CashDelivery"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },
  orderDate: { type: Date, default: Date.now },
  returnDate: { type: Date, required: true },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
