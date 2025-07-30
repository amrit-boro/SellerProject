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
      Date.now() +
        (process.env.JWT_COOKIE_EXPIRES_IN || 90) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true in prod only
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

  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and password",
    });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }

  createSendToken(user, 200, res); // ✅ Use this helper to send cookie + response
};

exports.protect = async (req, res, next) => {
  let token;

  // ✅ 1) Get token from Authorization header or cookie
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
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
