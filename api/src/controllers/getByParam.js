import insertion from '../utils/insertion.js';
import { BAD_REQUEST, NOT_FOUND, OK } from './protocols.js';

const getByParam = async (req, res) => {
	const { id } = req.params;
	const dog = await insertion();
	try {
		const filterById = dog.filter((d) => d.id === Number(id));
		return filterById.length
			? res.status(OK).json(filterById)
			: res
					.status(BAD_REQUEST)
					.json({ message: `Dog with id: ${id} doesn´t match` });
	} catch (err) {
		return res.status(NOT_FOUND).json({ message: err.message });
	}
};

export default getByParam;
