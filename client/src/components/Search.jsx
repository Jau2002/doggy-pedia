import useSearch from '../hooks/useSearch';
import { Browser, Editable, SearchBar } from '../styles/modules/Search';

function Search() {
	const { search, handleOnSubmit, handleOnChange } = useSearch();
	return (
		<SearchBar onSubmit={handleOnSubmit}>
			<Browser htmlFor='name'>Search</Browser>
			<Editable
				type='text'
				spellCheck='true'
				id='name'
				placeholder='Race...'
				value={search}
				onChange={handleOnChange}
			/>
		</SearchBar>
	);
}

export default Search;
