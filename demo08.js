const Router = require('koa-router');
const router = new Router();
const Koa = require('koa');
const app = new Koa();


app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'MyName',
            'wangcong'
        )
        ctx.body = "cookie is ok"
    }else {
        ctx.body = "hello world"
    }
})


app.listen(3000);
