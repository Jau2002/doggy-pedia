import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../actions';

function useSearch() {
	const [search, setSearch] = useState('');

	const dispatch = useDispatch();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		setSearch('');
	};

	const handleOnChange = (event) => {
		setSearch(event.target.value);
		dispatch(getByName(search));
	};

	return { search, handleOnSubmit, handleOnChange };
}

export default useSearch;
