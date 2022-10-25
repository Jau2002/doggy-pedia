import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../actions';
import { selectorAllDogs } from '../selectors';

function useMemory() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllDogs());
	}, [dispatch]);

	const [currentPage, setCurrentPage] = useState(1);

	const handleOnClick = (page) => {
		setCurrentPage(page);
	};

	const pageLimit = 8;

	const dogs = useSelector(selectorAllDogs);

	const previousPage = currentPage * pageLimit;

	const nextPage = previousPage - pageLimit;

	const totalRecords = dogs.slice(nextPage, previousPage);

	return {
		dogs,
		handleOnClick,
		totalRecords,
		pageLimit,
	};
}

export default useMemory;
