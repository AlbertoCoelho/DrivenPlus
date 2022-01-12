import styled from "styled-components";

const Input = styled.input`
  height: 52px;
  width: 100%;

  border: none;
  background-color: #FFFFFF;
  color: #222222;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  text-align: left;

  padding: 14px;
  margin-bottom: 10px;
  border-radius: 8px;

  &::placeholder {
    color: #7E7E7E;
    font-family: 'Roboto', sans-serif;
  }

  &::disabled {
    background-color: #F2F2F2;
  }
`;

export default Input;