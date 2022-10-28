const Router = require("koa-router")
const router = new Router()
const { PositiveIntergerValidator } = require("../../validators/validator")

const {
  HttpExcption,
  ParamaterException,
} = require("../../../core/http-exception")

router.post("/v1/:id/classic/latest", async(ctx, next) => {
  // const path = ctx.params
  // const query = ctx.request.query
  // const header = ctx.request.header
  // const body = ctx.request.body
  const v = await new PositiveIntergerValidator().validate(ctx) 
  const id = v.get('body.key', false)
  console.log(id)

  ctx.body = { key: "classic" }
})

module.exports = router
