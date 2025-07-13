const Product = require("../model/productModel");

exports.getReal = async (req, res) => {
  try {
    const product = await Product.find().populate("seller");
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
