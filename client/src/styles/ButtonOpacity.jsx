import styled from 'styled-components';

const aegean = '#23395d';

const denim = '#152238';

const ButtonOpacity = styled.button`
  cursor: pointer;
  font: 400 2em Rubik, serif;
  Background: ${aegean};
  padding: 0.5em;
  border-radius: 0.5em;

  &:hover {
    Background: ${denim};
  }
`;

export default ButtonOpacity;
