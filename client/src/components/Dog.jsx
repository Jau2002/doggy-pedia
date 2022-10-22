function Dog({ name, image, lowest_weight, highest_weight, temperament }) {
	return (
		<section>
			<div>
				<figure>
					<img
						src={image}
						alt={name}
					/>
				</figure>
				<div>
					<h3>{name}</h3>
					{lowest_weight && <h4>minimum weight: {lowest_weight}</h4>}
					{highest_weight && <h4>Aprox: {highest_weight}</h4>}
					{temperament?.map((t, i) => (
						<h5 key={i}>{t}</h5>
					))}
				</div>
			</div>
		</section>
	);
}

export default Dog;
