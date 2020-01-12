const Koa = require('koa');
const app = new Koa();
const fs = require('fs')


async function route(url) {
    let page = '';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/list':
            page = 'list.html';
            break;
        case '/nofound':
            page = '404.html';
            break;
        default:
            page = '404.html';
            break;
    }
    let html = await render(page);
    return html;
}

function render(page) {
    return new Promise(((resolve, reject) => {
        let path = `./pages/${page}`;
        fs.readFile(path,'binary',((err, data) => {
            if (err) {
                reject(err);
            }else {
                resolve(data);
            }
        }))
    }))
}

app.use(async (ctx) => {
    let url = ctx.url;
    let html = await route(url);
    ctx.body = html;
})


app.listen(3000,() => {
    console.log('测试原生路由的demo服务已经启动,端口号:3000')
})


// const Koa = require('koa');
// const fs = require('fs');
// const app = new Koa();
//
// function render(page){
//
//
//     return  new Promise((resolve,reject)=>{
//         let pageUrl = `./pages/${page}`;
//         fs.readFile(pageUrl,"binary",(err,data)=>{
//             console.log(444);
//             if(err){
//                 reject(err)
//             }else{
//
//                 resolve(data);
//             }
//         })
//     })
//
// }
//
// async function route(url){
//
//     let page = '404.html';
//     switch(url){
//         case '/':
//
//             page ='index.html';
//             break;
//         case '/index':
//             page ='index.html';
//             break;
//         case '/list':
//             page = 'list.html';
//             break;
//         case '/404':
//             page = '404.html';
//             break;
//         default:
//             break;
//     }
//     let html = await render(page);
//
//     return html;
// }
//
// app.use(async(ctx)=>{
//     let url = ctx.request.url;
//     let html = await route(url);
//
//     ctx.body=html;
// })
// app.listen(3000);
// console.log('starting at 3000');