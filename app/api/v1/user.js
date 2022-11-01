const Router = require("koa-router")
const router = new Router({
  prefix: "/v1/user",
})
const { RegisterValidator } = require("../../validators/validator")
const { User } = require("../../models/user")

router.post("/register", async (ctx, next) => {
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    email: v.get("body.email"),
    password: v.get("body.password2"),
    nickname: v.get("body.nickname"),
  }
  const r = await User.create(user)
  const id = v.get("body.key", false)

  ctx.body = { key: id }
})

module.exports = router