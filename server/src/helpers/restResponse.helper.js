export function responseOk(msg, data) {
  return {
    message: msg,
    data,
  };
}

export function responseError(err) {
  return {
    error: err,
  };
}

export default { responseError, responseOk };
