import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
const app = express();

// requests to /api will go to the specified url below
app.use(
	'/api',
	proxy('http://react-ssr-api.herokuapp.com', {
		// for this app only
		proxyReqOptDecorator(opts) {
			opts.headers['x-forwarded-host'] = 'localhost:3000';
			return opts;
		}
	})
);
app.use(express.static('public'));
app.get('*', (req, res) => {
	const store = createStore(req);
	// some logic to initialize and load data into the store
	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		})
		.map(promise => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});
	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);
		if (context.notFound) {
			res.status(404);
		}
		res.send(content);
	});
});
app.listen(3000, () => {
	console.log('listening on port 3000');
});
