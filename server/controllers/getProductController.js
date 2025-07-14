const Product = require("../model/productModel");

exports.getAllproducts = async (req, res) => {
  try {
    // Step 1: Get the product by ID
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }

    // Step 2: Find all products with the same seller
    const productsBySameSeller = await Product.find({
      seller: product.seller,
    });

    res.status(200).json({
      status: "success",
      data: {
        product,
        relatedProducts: productsBySameSeller,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
