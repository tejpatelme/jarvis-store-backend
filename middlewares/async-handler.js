const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    next(err);
  }
};

const paramAsyncHandler = (fn) => async (req, res, next, id) => {
  try {
    await fn(req, res, next, id);
  } catch (err) {
    next(err);
  }
};

module.exports = { asyncHandler, paramAsyncHandler };
