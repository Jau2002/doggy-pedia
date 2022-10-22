import styled from 'styled-components';

const blackPearl = '#1e2124';

const whisper = '#ececec';

const mayaBlue = '#97d1fe';

const ButtonActive = styled.button`
  cursor: pointer;
  font: 700 ${({ font }) => font || '1em'} Rubik, sans-serif;
  color: ${mayaBlue};
  Background: ${blackPearl};  
  padding: 0.5em;
  border: 2px solid ${mayaBlue};
  box-shadow: 2px 2px ${mayaBlue};

  &:hover {
    color: ${whisper};
    border: 2px solid ${whisper};
    box-shadow: 2px 2px ${whisper};
  }
`;

export default ButtonActive;
