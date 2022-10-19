import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../styles/Button';

function Welcome() {
	const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    backdrop-filter: brightness(15%);
    gap: 30px;
    top: 10em;
    left: 45em;
    padding: 3em;
    border-radius: 1em;
  `;
	const Title = styled.h1`
    font: 700 5em Lora, serif;
  `;
	const Phrase = styled.h2`
    font: 400 2em Rubik, sans-serif;
  `;
	return (
		<Container>
			<Title>Welcome</Title>
			<Phrase>Go to the Doggy pedia! ▼</Phrase>
			<Link to='/home'>
				<Button
					font='1.4em'
					type='button'
				>
					Home
				</Button>
			</Link>
		</Container>
	);
}

export default Welcome;
