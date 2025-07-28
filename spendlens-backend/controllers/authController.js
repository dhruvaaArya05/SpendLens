const User = require('../models/User');
const { check, validationResult } = require('express-validator');

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Invalid User" });
      } else if (user.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      } else {
        req.session.userId = user._id;
        console.log("user Id: ", JSON.stringify(user._id));
        console.log("req.session.userId", req.session.userId);
        res.status(200).json({ message: "Login successful" });
      }
    }).catch(err => {
      console.error("Error during login:", err);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.postSignup = [
  //Name Validation
  check("name")
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long')
    .matches(/^[a-zA-Z ]*$/)
    .withMessage('Name must contain only letters and spaces'),

  //Email Validation
  check("email")
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),

  //Password Validation
  check("password")
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters Long')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .trim(),

  //Confirm Password Validation
  check("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),


  (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new User({
      name: name,
      email: email,
      password: password,
    });

    user.save().then(() => {
      res.status(201).json({ message: "User Created Successfully" });
    }).catch(err => {
      console.error("Error during signup:", err);
      res.status(500).json({ message: "Internal server error" });
    });
  }
]

exports.postLogout = (req, res, next) => {
  console.log("Logging out user");
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logout successful" });
  });
}