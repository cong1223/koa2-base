const Router = require('koa-router');
const Koa = require('koa');
const app = new Koa();

// 子路由home
let home = new Router();
home
    .get('/test1',(ctx) => {
        ctx.body = "home -> test1"
    })
    .get('/test2',(ctx) => {
        ctx.body = "home -> test2"
    });

// 子路由todo
let todo = new Router();
todo
    .get('/test1',(ctx) => {
        ctx.body = "todo -> test1"
    })
    .get('/test2',(ctx) => {
        ctx.body = "todo -> test2"
    });

// 父路由
let router = new Router();


// 将子路由装载到父路由
router.use('/home',home.routes(),home.allowedMethods()).use('/todo',todo.routes(),todo.allowedMethods());


// 将路由装载到应用上
app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);
