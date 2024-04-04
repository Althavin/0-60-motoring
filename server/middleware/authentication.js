const { isTokenValid } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token; //the token characters

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({  message: "Authentication Invalid" });
  }

  try {
    const { name, userId, role ,avatar} = isTokenValid({ token });
    req.user = { name, userId, role,avatar };
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({  message: "Authentication Invalid" });
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({  message: "Not authorized to access this route" });
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
