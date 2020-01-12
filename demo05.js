const Router = require('koa-router');
const router = new Router();
const Koa = require('koa');
const app = new Koa();


router
    .get('/',(ctx,next) => {
        ctx.body = 'hello world';
    })
    .get('/todo',(ctx,next) => {
        ctx.body = 'todo something'
    })

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);
