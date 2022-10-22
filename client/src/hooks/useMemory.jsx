import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../actions';
import { selectorAllDogs } from '../selectors';

function useMemory() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllDogs());
	}, [dispatch]);

	const dogs = useSelector(selectorAllDogs);

	return { dogs };
}

export default useMemory;
