import styled from 'styled-components';
import { useContext } from 'react';
import { DataContext } from '../contexts/data';


const Overlay = ({name,price,setHidden,signatureData}) => {

  const { signature } = useContext(DataContext);

  const handleSignature = (signatureData) => {
    signature(signatureData);
  }

  return (
    <ScreenOverlay>
      <Screen>
        <h1>Tem certeza que deseja assinar o plano {name} ({price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}) </h1>
        <ButtonWrapper>
          <Button onClick={() => setHidden(true)}>
            Não
          </Button>
          <Button type="submit" color="pink" onClick={() => handleSignature(signatureData)}>
            Sim
          </Button>
        </ButtonWrapper>
        <CloseWindow onClick={() => setHidden(true)}> X </CloseWindow>
      </Screen>
    </ScreenOverlay>
  );
}

const ScreenOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px;
`

const Screen = styled.div`
  width: 248px;
  height: 210px;
  background-color: #FFF;
  
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 33px 22px 11px 22px;

  h1 {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 47px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 14px;
  justify-content: center;
`

const Button = styled.button`
  width: 95px;
  height: 52px;
  background-color: ${(props) => props.color ==='pink' ?  "#FF4791" :"#CECECE"};
  border-radius: 8px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;

  color: #FFFFFF;
  cursor: pointer;
`

const CloseWindow = styled.button`
  width: 28px;
  height: 24.5px;
  background: #FFF;

  border: none;
  font-size: 20px;
  text-align: center;
  color: #000000;

  cursor: pointer;

  position: absolute;
  right: 20px;
  top: 25.75px;
`

export default Overlay;