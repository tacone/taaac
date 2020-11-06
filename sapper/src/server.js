import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const { createProxyMiddleware } = require("http-proxy-middleware");


const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const devServerMiddleware = dev
  ? createProxyMiddleware({
      target: "http://localhost:7006",
      changeOrigin: true,
    })
  : (req, res, next) => {
      next();
	};

polka() // You can also use Express
	.use(
		// prevent CORS errors on localhost
		"__sapper__",
		devServerMiddleware
	)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
