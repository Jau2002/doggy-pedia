import dog from '../models/dog.js';
import temperament from '../models/temperament.js';

const attachInDb = async () => {
	const allModelAttributes = await dog.findAll({
		include: { model: temperament },
	});

	const insertValuesDb = allModelAttributes?.map((a) => ({
		id: a.id,
		name: a.name,
		lowest_height: a.lowest_height,
		highest_height: a?.highest_height,
		lowest_weight: a.lowest_weight,
		highest_weight: a?.highest_weight,
		lowest_life_span: a.lowest_life_span,
		highest_life_span: a?.highest_life_span,
		image: a.image,
		created_in_db: a.created_in_db,
		temperament: a?.map((t) => t.name),
	}));

	return insertValuesDb;
};

export default attachInDb;
