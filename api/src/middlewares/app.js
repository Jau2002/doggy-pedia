import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import rootRoute from '../routes/index.routes.js';

const server = express();

server.use(express.urlencoded({ extended: true, limit: '50mb' }));

server.use(express.json({ limit: '50mb' }));

server.use(cookieParser());

server.use(morgan('dev'));

server.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

server.use('/', rootRoute);

server.use((err, _, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	res.status(status).send(message);
	next();
});

export default server;
