const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

/**
 * koa-bodyparser 插件帮我们处理了对post请求的数据监听的处理,包括json的格式等工作
 */


app.use(bodyparser());

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        ctx.body = `
            <h1>学习koa post请求</h1>
            <form method="post" action="/">
                <p>userName</p>
                <input name="userName" type="text">
                <p>age</p>
                <input name="age" type="text">
                <p>website</p>
                <input name="website" type="text">
                <br />
                <button type="submit">提交</button>
            </form>
      `
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = ctx.request.body;
        ctx.body = postData;
    } else {
        ctx.body = "<h2>404,页面不存在</h2>"
    }
});

app.listen(3000,() => {
    console.log('demo03服务已启动,监听端口号3000');
});