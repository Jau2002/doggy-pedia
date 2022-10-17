import dog from '../models/dog.js';
import temperaments from '../models/temperament.js';
import { CREATE, UNPROCESSABLE_ENTITY } from './protocols.js';

const getByBody = async (req, res) => {
	const {
		name,
		lowest_height,
		highest_height,
		lowest_weight,
		highest_weight,
		lowest_life_span,
		highest_life_span,
		image,
		temperament,
	} = req.body;
	try {
		const newDog = await dog.create({
			name,
			lowest_height,
			highest_height,
			lowest_weight,
			highest_weight,
			lowest_life_span,
			highest_life_span,
			image,
			temperament,
		});
		const temperamentDb = await temperaments.findAll({
			where: { name: temperament },
		});
		newDog.addTemperament(temperamentDb);
		return res.status(CREATE).json({ message: 'Dog created successfully' });
	} catch (err) {
		return res.status(UNPROCESSABLE_ENTITY).json({ message: err.message });
	}
};

export default getByBody;
