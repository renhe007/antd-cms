var  Koa = require('koa')
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router')
var cors = require('koa-cors')
var table = require("./controller/table")

var app = Koa()
var router = Router()

router.get('/*', function* (next) {
    this.body = "服务已到期";
})
router.get('/table', table.search)

app
    .use(bodyParser())
    .use(cors({
        origin: true,
        credentials: true
    }))
    .use(function* (next) {
        yield next;
        console.log('%s %s', this.method, this.url);
    })
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(7000, '0.0.0.0')
