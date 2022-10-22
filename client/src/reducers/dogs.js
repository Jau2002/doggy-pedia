import { GET_ALL_DOGS, GET_BY_NAME } from '../selectors';

const inicialState = {
	allDogs: [],
};

function dogs(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_ALL_DOGS:
			return { ...state, allDogs: payload };

		case GET_BY_NAME:
			return { ...state, allDogs: payload };

		default:
			return { ...state };
	}
}

export default dogs;
