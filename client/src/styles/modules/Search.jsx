import styled from 'styled-components';

const white = '#fff';

export const SearchBar = styled.form`
  display: inline-flex;
`;

export const Browser = styled.label`
  font: 700 1em Rubik, serif;
  padding: 2em 1em;
`;

export const Editable = styled.input`
  font: 400 1em Rubik, serif;
  Background: #152238;
  text-transform: capitalize;
  outline: ${white};
  border-radius: 0.5em;
  padding: 0.2em;
  margin: 1.2em 0.5em;

  &:focus {
    padding: 0.6em;
    transition: padding 0.4s;
    border: 1px solid ${white};
    box-shadow: 1px 1px ${white};
  }

  &::placeholder {
    font: 400 italic 1em Rubik, serif;
  }
`;
