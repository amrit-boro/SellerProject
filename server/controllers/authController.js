const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "90d",
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    secure: true,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);
  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are exists
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
  }
  // Check if user exists && password is correct

  const user = await User.findOne({ email }).select("+password");
  // password == candidatePassword, user.password == userPassword

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }
  user.password = undefined; // Remove password from output
  // If everything is ok, send token to client
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.protect = async (req, res, next) => {
  // 1) Getting token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }
  // Verification of the token
  let decoded;
  try {
    decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message,
    });
  }
  // 2) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return res.status(401).json({
      status: "fail",
      message: "The user belonging to this token does no longer exist!",
    });
  }
  // 3) Check if user changed password after the token was issued
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return res.status(401).json({
      status: "fail",
      message: "User recently changed password! Please log in again.",
    });
  }

  // Grant access to protected route
  req.user = currentUser;
  next();
};
