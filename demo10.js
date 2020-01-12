const Koa  = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path')

app.use(views(path.join(__dirname,'./view'),{extension: 'ejs'}));


app.use(async(ctx)=>{
    let title = "wangcong hahahah!";
    await ctx.render('index',{title: title,name: '王聪'})
});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})