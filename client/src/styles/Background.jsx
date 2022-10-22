import styled from 'styled-components';

const bg = ({ background }) =>
	`../../public/images/${background || 'gb-pages.jpg'}`;

const Background = styled.main`
  Background: url(${bg}) no-repeat center scroll;
  background-size: cover;
  height: 100vh;
`;

export default Background;
