/*
												 _oo0oo_
    	                  o8888888o
    	                  88" . "88
    	                  (| -_- |)
    	                  0\  =  /0
    	                ___/`---'\___
    	              .' \\|     |// '.
    	             / \\|||  :  |||// \
    	            / _||||| -:- |||||- \
    	           |   | \\\  -  /// |   |
    	           | \_|  ''\---/''  |_/ |
    	           \  .-\__  '-'  ___/-. /
    	         ___'. .'  /--.--\  `. .'___
    	      ."" '<  `.___\_<|>_/___.' >' "".
    	     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
    	     \  \ `_.   \_ __\ /__ _/   .-` /  /
    	 =====`-.____`.___ \_____/___.-`___.-'=====
    	                   `=---='
    	 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

import sequelize from './src/config/db.config.js';
import server from './src/middlewares/app.js';
import './src/models/dog.js';

console.clear();

async function connection() {
	const reload = await sequelize.sync({ force: false });
	return reload;
}

const PORT = process.env.PORT || 3001;

connection(server.listen(PORT, () => console.log(`http://localhost:${PORT}`)));
