const { HttpExcption } = require("../core/http-exception")
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // 开发环境
    const isHttpException = error instanceof HttpExcption
    const isDev = global.config.enviroment === 'dev'
    if(isDev && !isHttpException){
      throw error
    }

    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        requestUrl: `${ctx.method} ${ctx.path}`,
      }
      ctx.status = error.code
    } else {
      // 未知异常
      ctx.body = {
        msg: 'unknown error',
        errorCode: 999,
        requestUrl: `${ctx.method} ${ctx.path}`,
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError
