import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config({ path: '.env.local' });

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize =
	process.env.NODE_ENV === 'production'
		? new Sequelize({
				dialect: 'postgres',
				username: DB_USER,
				password: DB_PASSWORD,
				host: DB_HOST,
				port: DB_PORT,
				database: DB_NAME,
				pool: { max: 3, min: 1, idle: 10000 },
				dialectOptions: {
					ssl: { require: true, rejectUnauthorized: false },
					keepAlive: true,
				},
				ssl: true,
		  })
		: new Sequelize(
				`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
				{
					logging: false,
					native: false,
				}
		  );

export default sequelize;
