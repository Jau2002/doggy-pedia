import { Link } from 'react-router-dom';
import Background from '../styles/Background';
import ButtonActive from '../styles/ButtonActive';
import { Phrase, Title, Welcome } from '../styles/modules/Landing';

function Landing() {
	return (
		<Background background='bg-landing-page.jpg'>
			<Welcome>
				<Title>Welcome</Title>
				<Phrase>Go to the Doggy pedia! ▼</Phrase>
				<Link to='/home'>
					<ButtonActive
						font='1.4em'
						type='button'
					>
						Home
					</ButtonActive>
				</Link>
			</Welcome>
		</Background>
	);
}

export default Landing;
