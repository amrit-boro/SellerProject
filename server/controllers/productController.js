const Product = require("../model/productModel");
const ApiFeatures = require("../utils/apifeatures");

exports.aliasTopProduct = (req, res, next) => {
  req.query.limit = "5"; // Page..
  req.query.sort = "price"; // result

  next();
};

exports.getAllProductBysellerId = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const products = await Product.find({ seller: sellerId });
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
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
  console.log(req.body);
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

// exports.getProductsWithin = async (req, res) => {
//   try {
//     const { distance, latlng, unit } = req.params;
//     const { name } = req.query;

//     const [lat, lng] = latlng.split(",").map(Number);

//     if (!lat || !lng) {
//       return res.status(400).json({
//         status: "fail",
//         message: "Invalid latitude or longitude",
//       });
//     }

//     let radius;

//     if (unit === "km") {
//       radius = distance / 6378.1;
//     } else if (unit === "mi") {
//       radius = distance / 3958.8;
//     } else if (unit === "m") {
//       radius = distance / 6378100;
//     } else {
//       return res.status(400).json({
//         status: "fail",
//         message: 'Invalid unit. Use "km", "mi", or "m".',
//       });
//     }

//     let products = await Product.find({
//       location: {
//         $geoWithin: {
//           $centerSphere: [[lng, lat], radius],
//         },
//       },
//     });

//     // Optional name filter
//     if (name) {
//       const lowerName = name.toLowerCase();
//       products = products.filter((product) =>
//         product.name.toLowerCase().includes(lowerName)
//       );
//     }

//     res.status(200).json({
//       status: "success",
//       result: products.length,
//       data: {
//         products,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "error",
//       message: err.message,
//     });
//   }
// };

// Controller: getProductsWithin.js

exports.getProductsWithin = async (req, res) => {
  try {
    const { distance, latlng, unit } = req.params;
    const { name } = req.query;

    const [lat, lng] = latlng.split(",").map(Number);

    if (isNaN(lat) || isNaN(lng)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid coordinates. Use format: lat,lng",
      });
    }

    // Convert distance to radians
    // console.log("latlng", latlng);
    let radius;
    if (unit === "km") {
      radius = distance / 6378.1;
    } else if (unit === "mi") {
      radius = distance / 3958.8;
    } else if (unit === "m") {
      radius = distance / 1000 / 6378.1; // Convert meters to km first
    } else {
      return res.status(400).json({
        status: "fail",
        message: 'Invalid unit. Use "km", "mi", or "m".',
      });
    }

    // Build base query
    let query = {
      location: {
        $geoWithin: {
          $centerSphere: [[lng, lat], radius],
        },
      },
    };

    // Add optional name filter (case-insensitive)
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    // Query MongoDB with seller populated
    const products = await Product.find(query).populate("seller"); // ✅ FIXED

    res.status(200).json({
      status: "success",
      result: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getDistances = async (req, res) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(",");

  if (!lat || !lng) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide latitude and longitude in the format lat,lng",
    });
  }

  const distances = await Product.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [lng * 1, lat * 1], // converting into number
        },
        distanceField: "distance",
        distanceMultiplier: 0.001, // divide property
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: {
      data: distances,
    },
  });
};
