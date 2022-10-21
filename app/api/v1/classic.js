const Router = require("koa-router")
const router = new Router()
const {
  HttpExcption,
  ParamaterException,
} = require("../../../core/http-exception")

router.post("/v1/:id/classic/latest", (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const header = ctx.request.header
  const body = ctx.request.body
  if (query.pika) {
    throw new ParamaterException()
  }
  ctx.body = { key: "classic" }
})

module.exports = router
