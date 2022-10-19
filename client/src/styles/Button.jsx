import styled from 'styled-components';

const dark = '#1e2124';
const light = '#ececec';

const Button = styled.button`
  cursor: pointer;
  font: 400 ${({ font }) => font || '1em'} Rubik, sans-serif;
  color: ${light};
  Background: ${dark};  
  padding: 0.5em;
  border: 2px solid ${light};
  border-radius: 0.5em;
  
  &:hover {
    color: ${light}:
    Background: ${dark};
    box-shadow: 2px 2px ${light};
  }
`;

export default Button;
