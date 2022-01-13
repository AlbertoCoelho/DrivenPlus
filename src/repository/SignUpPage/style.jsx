import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;

background-color: #0E0E13;
`
const StyledLink = styled(Link)`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
margin-top: 25px;
`;

export {
  Wrapper,
  Container,
  StyledLink
}