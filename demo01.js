const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    // 获取url
    let url = ctx.url;
    // 从request中获取请求信息
    let request = ctx.request;
    let query = request.query;
    let querystring = request.querystring;
    // 直接从上下文中获取request
    let ctx_query = ctx.query;
    let ctx_querystriing = ctx.querystring;
    ctx.body = {
        url,
        request,
        query,
        querystring,
        ctx_query,
        ctx_querystriing
    }
})

app.listen(3000,() => {
    console.log('demo01服务已启动,监听端口号3000');
});