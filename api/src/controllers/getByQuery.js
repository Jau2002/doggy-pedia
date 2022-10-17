import insertion from '../utils/insertion.js';
import { CONFLICT, NOT_FOUND, OK } from './protocols.js';

const getByQuery = async (req, res) => {
	const { name } = req.query;
	const dog = await insertion();
	try {
		if (name) {
			const filterForName = dog.filter((d) =>
				d.name.toUpperCase().includes(name.toUpperCase())
			);

			return filterForName.length
				? res.status(OK).json(filterForName)
				: res.status(CONFLICT).json({
						message: `the ${name} breed does not exist`,
				  });
		}
		return res.status(OK).json(dog);
	} catch (err) {
		return res.status(NOT_FOUND).json({ message: err.message });
	}
};

export default getByQuery;
