const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const Seller = require("../model/sellerModel");
const { decode } = require("punycode");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "90d", // <-- JWT expires in 90 days
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() +
        parseInt(process.env.JWT_COOKIE_EXPIRES_IN || 90, 10) *
          24 *
          60 *
          60 *
          1000 // days → ms
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  };

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    // password= currently comming password from the user ///  and user.password is already
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }

  createSendToken(user, 200, res); // ✅ Use this helper to send cookie + response
};

exports.sellerLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
  }

  const seller = await Seller.findOne({ sellerEmail: email }).select(
    "+password"
  );
  console.log(password, seller.password);

  if (!seller || !(await seller.correctPassword(password, seller.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }

  createSendToken(seller, 200, res);
};

exports.protect = async (req, res, next) => {
  // console.log("protect running ", req.headers);
  // console.log("Request body: ", req.body);
  let token;

  // ✅ 1) Get token from Authorization header or cookie
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Got the token:", token);
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  // ✅ 2) Verify token
  let decoded;
  try {
    decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid token. Please log in again.",
    });
  }

  // ✅ 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return res.status(401).json({
      status: "fail",
      message: "The user belonging to this token no longer exists.",
    });
  }

  // ✅ 4) Check if password changed after token issued
  if (
    currentUser.changePasswordAfter &&
    currentUser.changePasswordAfter(decoded.iat)
  ) {
    return res.status(401).json({
      status: "fail",
      message: "User recently changed password! Please log in again.",
    });
  }

  // ✅ 5) Attach user to request
  req.user = currentUser;
  next();
};

exports.SellerProtect = async (req, res, next) => {
  let token;

  // ✅ 1) Get token from Authorization header or cookie
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Got the token:----------", token);
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  // ✅ 2) Verify token
  let decoded;
  try {
    decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log("decoded: ", decoded);
    console.log("errrr");
    return res.status(401).json({
      status: "fail",
      message: "Invalid token. Please log in again.",
    });
  }

  // ✅ 3) Check if user still exists
  const currentUser = await Seller.findById(decoded.id);

  if (!currentUser) {
    return res.status(401).json({
      status: "fail",
      message: "The user belonging to this token no longer exists.",
    });
  }

  // ✅ 4) Check if password changed after token issued
  if (
    currentUser.changePasswordAfter &&
    currentUser.changePasswordAfter(decoded.iat)
  ) {
    return res.status(401).json({
      status: "fail",
      message: "User recently changed password! Please log in again.",
    });
  }

  // ✅ 5) Attach user to request.......................................
  req.user = currentUser;
  next();
};

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    // ✅ 2) Verify token
    let decoded;
    try {
      decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
    } catch (error) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid token. Please log in again.",
      });
    }

    // ✅ 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next();
    }

    // ✅ 4) Check if password changed after token issued
    if (
      currentUser.changePasswordAfter &&
      currentUser.changePasswordAfter(decoded.iat)
    ) {
      return next();
    }

    // THERE IS A LOGGEDIN USER
    req.local.user = currentUser;
    next();
  }
  next();
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      photo: req.body.photo || "default.jpg",
      passwordChangedAt: req.body.passwordChangedAt || Date.now(),
    });

    // Generate JWT token
    createSendToken(newUser, 201, res);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.sellersignup = async (req, res) => {
  try {
    const newSeller = await Seller.create({
      sellerName: req.body.sellerName,
      sellerAbout: req.body.sellerAbout,
      SellerProfilePic: req.body.SellerProfilePic || "default.jpg",
      sellerEmail: req.body.sellerEmail,
      sellerPhone: req.body.sellerPhone,
      sellerAddress: req.body.sellerAddress,
      sellerPanCard: req.body.sellerPanCard,
      sellerIFSC: req.body.sellerIFSC,
      sellerAccountNumber: req.body.sellerAccountNumber,
      sellerAccountHolder: req.body.sellerAccountHolder,
      startLocation: {
        coordinates: req.body.startLocation.coordinates,
        address: req.body.startLocation.address,
        description: req.body.startLocation.description,
      },
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    // Generate JWT token
    createSendToken(newSeller, 201, res);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
