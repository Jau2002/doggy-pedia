import styled from 'styled-components';

export const Container = styled.address`
  Background: #141e2f;
  padding-top: 5em;
  border-radius: 1em;
`;

export const Title = styled.h2`
  font: 700 3em Lora, serif;
  text-align: center;
`;

export const Form = styled.form`
  
`;

export const FormContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-around;
`;

export const ParameterContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 0.5em;
`;

export const Label = styled.label`
  font: 700 1em Rubik, serif;
  Color: #a7aed3;
  margin: 0.5em 1.5em 0;
`;

export const Input = styled.input`
  font: 700 1em Rubik, serif;
  width: 100%;
  border-radius: 0.5em;
  Color: #6495ed;
  margin: 0 2em;
  padding: 0.5em;
  border-bottom: 3px solid #97d1fe;
  outline: none;

  &:focus {
    border-bottom: 3px solid #152238;
    Background: linear-gradient(to bottom, transparent, #283c5f);
  }

  &::placeholder {
    font: 400 italic 1em Rubik, serif;
    Color: #88d2ec;
  }
`;

export const Message = styled.span`
  font: 400 italic 1em Rubik, serif;
  Color: #ff7070;
  margin: 0.5em 1em;
  white-space: ${({ space }) => `${space || 'normal'}`};
`;

export const DataList = styled.datalist`
  position: absolute;
  max-height: 20em;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Options = styled.option`
  font-size: 0.8em;
  padding: 0.3em 1em;
  background-color: #ccc;
  cursor: pointer;

  &::hover,
  &:focus {
  color: #fff;
  background-color: #036;
  outline: 0 none;
}
`;

export const List = styled.ul`
  padding: 1em;
`;

export const Item = styled.li`
  display: inline-flex;
  border: 2px solid #fff;
  border-radius: 0.5em;
  margin: 0 1em;
`;

export const NameItem = styled.p`
  font: 400 italic 1em Rubik, serif;
  padding: 0.5em;

`;

export const ButtonItem = styled.button`
  cursor: pointer;
  font: 700 italic 1em Rubik, serif;
  padding: 0.5em 1em;
  Color: #ff7070;
`;

const blackPearl = '#1e2124';

const whisper = '#ececec';

const mayaBlue = '#97d1fe';

export const Button = styled.input`
  display: inline-flex;
  margin: 0 17em;
  cursor: pointer;
  font: 700 ${({ font }) => font || '1em'} Rubik, sans-serif;
  color: ${mayaBlue};
  Background: ${blackPearl};  
  padding: 1em;
  border-radius: 0.5em;
  border: 2px solid ${mayaBlue};
  box-shadow: 2px 2px ${mayaBlue};

  &:hover {
    color: ${whisper};
    border: 2px solid ${whisper};
    box-shadow: 2px 2px ${whisper};
`;
