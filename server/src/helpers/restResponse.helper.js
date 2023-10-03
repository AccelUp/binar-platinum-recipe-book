function responseOk(msg, data) {
  return {
    message: msg,
    data,
  };
}

function responseError(err) {
  return {
    error: err,
  };
}

export { responseError, responseOk };
