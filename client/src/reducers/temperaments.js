import { GET_ALL_TEMPERAMENTS } from '../selectors';

const inicialState = {
	temperaments: [],
};

function temperament(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_ALL_TEMPERAMENTS:
			return { ...state, temperaments: payload };

		default:
			return { ...state };
	}
}

export default temperament;
