import styled from 'styled-components';

const mayaBlue = '#97d1fe';

const font = ({ weight, size }) =>
	`${weight || 400} ${size || '2em'} Rubik, serif`;

export const Error404 = styled.header`
		display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
		padding: 3em;
    Background: #19191B;
    height: 100vh;
  `;
export const Status = styled.h2`
    font: ${font};
    color: ${mayaBlue};
  `;
export const Text = styled.p`
    font: 400 3em Lora, serif;
    
  `;
export const Message = styled.h3`
    font: ${font};
    color: ${mayaBlue};
  `;
