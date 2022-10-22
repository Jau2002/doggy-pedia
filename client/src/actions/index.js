import axios from 'axios';
import { GET_ALL_DOGS, GET_BY_NAME } from '../selectors';

export function getAllDogs() {
	return async (dispatch) => {
		const res = await axios.get('/dogs');
		return dispatch({ type: GET_ALL_DOGS, payload: res.data });
	};
}

export function getByName(name) {
	return async (dispatch) => {
		const res = await axios.get(`/dogs?name=${name}`);
		return dispatch({ type: GET_BY_NAME, payload: res.data });
	};
}
