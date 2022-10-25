import { GET_ALL_DOGS, GET_BY_NAME, POST_DOG } from '../selectors';

const inicialState = {
	allDogs: [],
};

function dogs(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_ALL_DOGS:
			return { ...state, allDogs: payload };

		case GET_BY_NAME:
			return { ...state, allDogs: payload };

		case POST_DOG:
			return { ...state };

		default:
			return { ...state };
	}
}

export default dogs;
