import useMemory from '../hooks/useMemory';

function Paging({ handleOnClick }) {
	const { pageLimit, dogs } = useMemory();

	const totalPages = [];

	for (let i = 1; i <= Math.ceil(dogs.length / pageLimit); i++) {
		totalPages.push(i);
	}

	return (
		<footer>
			{totalPages?.map((num) => (
				<button
					type='button'
					key={num}
					onClick={() => handleOnClick(num)}
				>
					{num}
				</button>
			))}
		</footer>
	);
}
export default Paging;
