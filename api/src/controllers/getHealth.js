import { NOT_FOUND, OK } from './protocols.js';

const getHealth = async (_, res) => {
	try {
		return res.status(OK).json({ message: 'the server is running' });
	} catch (err) {
		return res.status(NOT_FOUND).json({ message: err.message });
	}
};

export default getHealth;
