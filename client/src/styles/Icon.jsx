import styled from 'styled-components';

const link = ({ name }) => `../public/images/${name}`;

const Icon = styled.menu`
  Background: url(${link}) no-repeat center scroll;
  background-size: cover;
  height: 60px;
  width: 60px;
  z-index: 1;
  opacity: 0.5;
  margin: 0 0.3em;

  &:hover {
    opacity: 1;
    position: relative;
    top: 0.5em;
    left: 0.5em;
  }
`;

export default Icon;
