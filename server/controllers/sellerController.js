const Seller = require("../model/sellerModel");

exports.getAllSeller = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.status(200).json({
      status: "succes",
      Length: sellers.length,

      data: {
        sellers,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createSeller = async (req, res) => {
  try {
    const newSeller = await Seller.create(req.body);
    res.status(200).json({
      status: "succes",
      data: {
        newSeller,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getSeller = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        seller,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updataSeller = async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      status: "success",
      data: {
        seller,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// "/seller-within/:distance/center/:latlng/unit/:unit"
//  /seller-distance/233/center/26.212110, 91.684016/unit/km

exports.getSellerWithin = async (req, res) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(",");

  let radius;

  if (unit === "km") {
    radius = distance / 6378.1;
  } else if (unit === "mi") {
    radius = distance / 3958.8;
  } else if (unit === "m") {
    radius = distance / 6378100; // Earth's radius in meters
  } else {
    return res.status(400).json({
      status: "fail",
      message: "Invalid unit. Allowed units are 'km', 'mi', or 'm'.",
    });
  }

  if (!lat || !lng) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide latitude and longitude in the format lat,lng",
    });
  }

  console.log(
    "distance: ",
    distance,
    "lat: ",
    lat,
    "lng: ",
    lng,
    "unit: ",
    unit
  );

  const sellers = await Seller.find({
    startLocation: {
      $geoWithin: { $centerSphere: [[lng, lat], radius] },
    },
  });

  res.status(200).json({
    status: "success",
    length: sellers.length,
    data: {
      sellers,
    },
  });
};
