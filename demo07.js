const Router = require('koa-router');
const router = new Router();
const Koa = require('koa');
const app = new Koa();


router
    .get('/',(ctx,next) => {
        ctx.body = ctx.request.query;
    })
    .get('/todo',(ctx,next) => {
        ctx.body = ctx.querystring;
    })

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);
