class HttpExcption extends Error {
  constructor(msg = "server error", errorCode = 10000, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

class ParameterException extends HttpExcption {
  constructor(msg, errorCode) {
    super()
    this.code = 400
    this.msg = msg || "参数错误"
    this.errorCode = errorCode || 10000
  }
}

module.exports = {
  HttpExcption,
  ParameterException,
}
