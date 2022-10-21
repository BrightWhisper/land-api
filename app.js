const Koa = require("koa")
const parser = require('koa-bodyparser')
const axios = require("axios")
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

const app = new Koa()
app.use(catchError)
app.use(parser())

InitManager.initCore(app)



app.listen(9996)
