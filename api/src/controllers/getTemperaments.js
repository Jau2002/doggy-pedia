import temperament from '../models/temperament.js';
import insertion from '../utils/insertion.js';
import { BAD_REQUEST, OK } from './protocols.js';

const getTemperaments = async (_, res) => {
	const temperaments = await insertion();

	const flatten = temperaments
		.map((t) => t.temperament)
		.join()
		.split(',')
		.sort();

	const allTemperaments = flatten.filter(
		(t, i) => flatten.indexOf(t) === i && t !== ''
	);
	try {
		allTemperaments.forEach((t) =>
			temperament.findOrCreate({
				where: { name: t },
			})
		);
		return res.status(OK).json(allTemperaments);
	} catch (err) {
		return res.status(BAD_REQUEST).json({ message: err.message });
	}
};

export default getTemperaments;
