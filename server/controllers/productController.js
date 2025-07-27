const Product = require("../model/productModel");
const ApiFeatures = require("../utils/apifeatures");

exports.aliasTopProduct = (req, res, next) => {
  req.query.limit = "5"; // Page..
  req.query.sort = "price"; // result

  next();
};

exports.getAllProduct = async (req, res) => {
  try {
    const features = new ApiFeatures(
      Product.find().populate("seller"),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .pagination();
    const products = await features.query;

    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
        data: {
          products: [],
          total: 0,
        },
      });
    }

    // 9. Response
    res.status(200).json({
      status: "success",
      result: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message || "Server Error",
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
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

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: false,
    });
    res.status(201).json({
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

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({
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

exports.getProductsWithin = async (req, res) => {
  const { distance, latlng, unit } = req.params;
  const { name } = req.query; // ✅ extract query param

  const [lat, lng] = latlng.split(",").map((val) => val.trim());

  let radius;
  if (unit === "km") radius = distance / 6378.1;
  else if (unit === "mi") radius = distance / 3958.8;
  else if (unit === "m") radius = distance / 6378100;
  else
    return res.status(400).json({
      status: "fail",
      message: "Invalid unit. Allowed units are 'km', 'mi', or 'm'.",
    });

  if (!lat || !lng) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide latitude and longitude in the format lat,lng",
    });
  }

  // 1. Get all products and populate seller
  const allProducts = await Product.find().populate("seller");

  // 2. Filter those with startLocation within radius
  const filteredProducts = allProducts.filter((product) => {
    const coords = product.seller?.startLocation?.coordinates;
    if (!coords) return false;

    const [sellerLng, sellerLat] = coords;

    const toRad = (deg) => (deg * Math.PI) / 180;
    const R = 6378.1; // Earth radius in km

    const dLat = toRad(sellerLat - lat);
    const dLng = toRad(sellerLng - lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat)) *
        Math.cos(toRad(sellerLat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKm = R * c;

    // ✅ Also filter by product name (if provided)
    if (name) {
      const productName = product.name?.toLowerCase() || "";
      if (!productName.includes(name.toLowerCase())) return false;
    }

    return distanceInKm <= distance;
  });

  res.status(200).json({
    status: "success",
    length: filteredProducts.length,
    data: {
      products: filteredProducts,
    },
  });
};
