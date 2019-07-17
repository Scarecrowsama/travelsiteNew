module.exports = {
  notFound: (req, res, next) => {
    const error = new Error('The requested page does not exist.');
    error.status = 404;
    next(error);
  },

  responseError: (responseError, req, res, next) => {
    if(responseError.status !== 404 && responseError.status !== 500) { responseError.status = 500; }
    res.status = (responseError.status || 500);
    res.render(`partials/${res.status}`, { responseError: responseError });
  },

  RequiredParameterError: class RequiredParameterError extends Error {
    constructor (param) {
      super(`${param} can not be null or underfined.`)
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, RequiredParameterError)
      }
    }
  }
};