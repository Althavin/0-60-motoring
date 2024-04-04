const { CustomApiError } = require("../errors");
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message:err.message || 'Something went wrong'});
};

module.exports = errorHandlerMiddleware;

