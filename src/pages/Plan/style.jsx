import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: start;
  align-items: center;

  background-color: #0E0E13;

  h1 {
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;

    margin-bottom: 22px;
  }

  form {
    width: 85%;
  }
`;

const Image = styled.img`
  width: 139.38px;
  height: 95.13px;
  margin: 87px 0 12px;
`;

const FirstIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 5px;
  margin-left: 44px;
  margin-bottom: 10px;

  h2 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
`

const FistText = styled.div`
  display: flex;
  width: 100%;

  margin-left: 44px;

  li {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
`

const SecondIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 5px;
  margin-left: 44px;
  margin-bottom: 4px;
  margin-top: 12px;

  h2 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
`

const IconBack = styled.div`
  position: absolute;
  left: 22px;
  top: 24.35px;

`

const SecondText = styled.div`
  display: flex;
  width: 100%;

  margin-left: 44px;
  margin-bottom: 34px;

  h3 {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
  }
`

export {
  Wrapper,
  Container,
  Image,
  FirstIcon,
  SecondIcon,
  FistText,
  SecondText,
  IconBack
}