import Dog from '../components/Dog';
import Nav from '../components/Nav';
import Paging from '../components/Paging';
import useMemory from '../hooks/useMemory';
import Background from '../styles/Background';
import Loader from '../styles/Loader';

function Home() {
	const { handleOnClick, totalRecords } = useMemory();
	return (
		<Background>
			<Nav />
			<section>
				{totalRecords.length ? (
					totalRecords.map((d) => (
						<Dog
							key={d.id}
							name={d.name}
							image={d.image}
							lowest_weight={d.lowest_weight}
							highest_weight={d.highest_weight}
							temperament={d.temperament}
						/>
					))
				) : (
					<Loader />
				)}
			</section>
			<Paging handleOnClick={handleOnClick} />
		</Background>
	);
}

export default Home;
