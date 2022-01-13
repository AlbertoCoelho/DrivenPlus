import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#FF4791" : "#888"};
  opacity: ${ (props) => props.desabilitar ? 0.7 : 1 };
  
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  color: #FFFFFF;
  text-align: center;
  margin-top: 8px;

  padding: 14px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Button;