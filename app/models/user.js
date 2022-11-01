const { sequelize } = require("../../core/db")
const { Sequelize, Model } = require("sequelize")

class User extends Model {}

User.init(
  {
    // 设置主键
    // 主键: 不能重复，不能为空
    // 主键也可以设计为自增
    // id编号最好用数字，因为相对字符串它的性能是最好的，尤其不要使用随机字符串(GDID)
    // 不用担心id会不会暴露，而是要做成即使别人知道用户编号,也无法得到想要的信息(TOKEN)
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true
    },
    password: Sequelize.STRING,
    openid: {
      type: Sequelize.STRING(64),
      unique: true,
    },
  },
  { sequelize, tableName: "user" }
)
module.exports = {
  User,
}
