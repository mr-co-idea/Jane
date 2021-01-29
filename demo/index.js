const { createServer, Server, Utils: { readHtmlFile } } = require('little_server'),
	path = require('path');

//启动服务
createServer({ staticPath: path.join(__dirname, './src/static') });

//配置加载
Server.use(ctx => {
	if (ctx.url === '/') {
		ctx.body = readHtmlFile(path.join(__dirname, './src/pages/index.html'));
	};
})