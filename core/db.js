const Sequelize = require("sequelize")

const { dbName, host, port, user, password } = global.config.database

// 4各参数， dbName,user,password和一个数据对象
const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: "+08:00",
  define: {
    // 自动生成createdAt,updatedAt
    timestamps: true,
    // 自动生成deletedAt字段，启用软删除
    paranoid: true,
    // 修改字段别名
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    // 将驼峰转换为下划线形式
    underscored: true,
  },
})

// force会强制删除表并重新建表
sequelize.sync({ force: false })

module.exports = {
  sequelize,
}
