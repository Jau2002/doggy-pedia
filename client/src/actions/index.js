import axios from 'axios';
import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_BY_NAME } from '../selectors';

export function getAllDogs() {
	return async (dispatch) => {
		try {
			const res = await axios.get('/dogs');
			return dispatch({ type: GET_ALL_DOGS, payload: res.data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

export function getByName(name) {
	return async (dispatch) => {
		try {
			const res = await axios.get(`/dogs?name=${name}`);
			return dispatch({ type: GET_BY_NAME, payload: res.data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

export function postDog(payload) {
	return async () => {
		try {
			const body = await axios.post('/dogs', payload);
		} catch (err) {
			throw new Error(err);
		}
		return body;
	};
}

export function getTemperaments() {
	return async (dispatch) => {
		try {
			const res = await axios.get('/temperaments');
			return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: res.data });
		} catch (err) {
			throw new Error(err);
		}
	};
}
