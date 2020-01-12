const Koa = require('koa');
const app = new Koa();


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
        ctx.body = await parsePostData(ctx);
    } else {
        ctx.body = "<h2>404,页面不存在</h2>"
    }
});

function parsePostData(ctx) {
    return new Promise(((resolve, reject) => {
        try {
            let postData = '';
            // 监听数据变化
            // req:是context提供的node.js原生HTTP请求对象
            ctx.req.on('data',(data) => {
                postData += data;
            })
            // 监听请求结束
            ctx.req.on('end',() => {
                let result = parseQueryStr(postData);
                resolve(result);
            })
        }catch (e) {
            reject(e);
        }
    }))
}

function parseQueryStr(uri) {
    let queryData = {};
    let queryStringList = uri.split('&');
    queryStringList.forEach(item => {
        let itemList = item.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    })
    return queryData;
}

app.listen(3000,() => {
    console.log('demo02服务已启动,监听端口号3000');
});