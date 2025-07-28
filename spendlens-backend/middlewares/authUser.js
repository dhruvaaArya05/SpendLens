exports.authenticateUser = (req, res, next) => {
  // console.log("session data:", req.session, req.session.userId);
  if (req.session.userId) {
    req.userId = req.session.userId;
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};