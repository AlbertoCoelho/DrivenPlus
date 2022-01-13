import styled from 'styled-components';

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

  h1 {
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;

    margin-bottom: 24px;
  }
`

const Button = styled.button`
  height: 180px;
  width: 290px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;

  font-family: 'Roboto';
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  color: #FFFFFF;
  text-align: center;

  background-color: #0E0E13;
  border: 3px solid #7E7E7E;
  border-radius: 12px;

  margin-bottom: 10px;

  h2 {
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 50%;
    height:100%;
    object-fit: contain;
  }

  cursor: pointer;
`

export {
  Wrapper,
  Container,
  Button
}