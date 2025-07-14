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
    res.status(400).json({
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
    res.status(400).json({
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
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
