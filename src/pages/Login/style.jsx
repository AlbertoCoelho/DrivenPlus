import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Logo = styled.img`
  width: 300px;
  height: 50px;
  margin: 134px 0 100px;
`

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;

  background-color: #0E0E13;

  form {
    width: 85%;
  }

`
const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  margin-top: 25px;

  font-family: "Roboto";
  font-style: normal;
`;

export {
  Wrapper,
  Container,
  Logo,
  StyledLink
}