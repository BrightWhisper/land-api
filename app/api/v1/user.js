const bcrypt = require("bcryptjs")

const Router = require("koa-router")
const router = new Router({
  prefix: "/v1/user",
})
const { RegisterValidator } = require("../../validators/validator")
const { User } = require("../../models/user")

router.post("/register", async (ctx, next) => {
  const v = await new RegisterValidator().validate(ctx)
  // 密码不能以明文来存储
  // 加密需要一个盐,参数指的是计算机生成盐的成本，一般是10,当然成本越高，安全性也就越高
  // 同一密码用此方法加密后生成的字符串是不同的,这一点用于防御彩虹攻击
  const salt = bcrypt.genSaltSync(10)
  const psw = bcrypt.hashSync(v.get("body.password2"), salt)
  const user = {
    email: v.get("body.email"),
    password: psw,
    nickname: v.get("body.nickname"),
  }
  // 插入一条记录
  const r = await User.create(user)
  const id = v.get("body.key", false)

  ctx.body = { key: id }
})

module.exports = router
