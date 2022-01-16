import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;

  background-color: #0E0E13;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;
`

const Image = styled.img`
  width: 74.52px;
  height: 50.87px;
  margin: 32px 0 0 38px;
`;

const IconUser = styled.div`
  margin: 22.53px 22px 0 0;
`

const Texto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 53px;

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;

  color: #FFFFFF;
`

const Button = styled.button`
  height: 52px;
  width: 85%;
  background-color:#FF4791;
  margin-bottom: 8px;

  border: none;
  border-radius: 8px;


  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ButtonCancelPlan = styled.div`
  height: 52px;
  width: 85%;
  background-color:#FF4747;
  margin-bottom: 8px;

  border: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  Header,
  Container,
  Image,
  IconUser,
  Texto,
  Button,
  ButtonContainer,
  ButtonCancelPlan
}