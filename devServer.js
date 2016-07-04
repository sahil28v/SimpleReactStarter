var path = require('path'),
	express = require('express'),
	webpack = require('webpack'),
	config = require('./webpack.config'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	app = express(),
	compiler = webpack(config);

	app.use(webpackDevMiddleware(compiler,{
		noInfo: true,
		publicPath: config.output.publicPath
	}));

	app.use(webpackHotMiddleware(compiler));

	app.get('*', (req, res)=>{ res.sendFile(path.join(__dirname, 'index.html'))});

	app.listen(3000, 'localhost', error=>{
		if(error){
			console.log(error);
		} else {
			console.log('Listening to port 3000');
		}

	});