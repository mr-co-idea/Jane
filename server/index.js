const Koa = require('koa'), fs = require('fs'), path = require('path'),Static = require('koa-static');

const app = new Koa();
app.use(Static(path.join(__dirname,'./static')))

app.use(async ctx => {
	if (ctx.url.indexOf('topage') !== -1) {
		const page = fs.readFileSync(path.join(__dirname, '../web/view/index.html'), { encoding: 'utf-8' });
		ctx.body = page;
	}
})
app.listen(3000, () => {
	console.info('服务启动，3000端口');
});