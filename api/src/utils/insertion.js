import attachInDb from '../services/attachInDb.js';
import requestApi from '../services/requestApi.js';

const insertion = async () => {
	const getApi = await requestApi();
	const getDb = await attachInDb();

	return [...getApi, ...getDb];
};

export default insertion;
