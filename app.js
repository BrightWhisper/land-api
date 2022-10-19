const Koa = require("koa")
const axios = require("axios")

const classic = require('./api/v1/classic')
const book = require('./api/v1/book')

const app = new Koa()



app.use(classic.routes())
app.use(book.routes())

app.listen(9996)
