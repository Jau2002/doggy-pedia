import Dog from '../components/Dog';
import Nav from '../components/Nav';
import useMemory from '../hooks/useMemory';
import Loader from '../styles/Loader';

function Home() {
	const { dogs } = useMemory();
	return (
		<main>
			<Nav />
			<section>
				{dogs.length ? (
					dogs.map((d) => (
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
		</main>
	);
}

export default Home;
