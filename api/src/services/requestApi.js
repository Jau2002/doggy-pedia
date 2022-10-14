import axios from 'axios';

const requestApi = async () => {
	const resolve = await axios.get('https://api.thedogapi.com/v1/breeds');

	const response = resolve.data.map((d) => ({
		id: d.id,
		name: d.name,
		lowest_height: Number(d.height.metric.slice(0, 2)),
		highest_height:
			d.height.metric.length < 3
				? undefined
				: Number(d.height.metric.slice(4, 7)),
		lowest_weight: Number(d.weight.metric.slice(0, 2)),
		highest_weight:
			d.weight.metric.length < 3
				? undefined
				: Number(d.weight.metric.slice(4, 7)),
		lowest_life_span: Number(d.life_span.slice(0, 2)),
		highest_life_span: d.life_span.includes('-')
			? Number(d.life_span.slice(4, 7))
			: undefined,
		image: d.image.url,
		temperament: d.temperament?.replace(/,/g, '').split(' '),
	}));

	return response;
};

export default requestApi;
