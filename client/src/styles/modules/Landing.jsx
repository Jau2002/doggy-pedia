import styled from 'styled-components';

export const Welcome = styled.menu`
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
export const Title = styled.h1`
  font: 700 5em Lora, serif;
	color: #97d1fe;
`;
export const Phrase = styled.h2`
  font: 500 2em Rubik, sans-serif;
`;
