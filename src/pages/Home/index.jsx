import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { Header, Container,Image,IconUser,Texto,Button,ButtonContainer,ButtonCancelPlan } from './style';

import { DataContext } from '../../contexts/data';

import { IconContext } from "react-icons";
import {FaRegUserCircle} from "react-icons/fa";

const Home = () => {

  const navigate = useNavigate();
  const { deletesig } = useContext(DataContext);
  const {image,perks} = useLocation().state;

  const handleDeleteSignature = () => {
    deletesig();
  }

  return (
    <>
      <Container>
        <Header>
          <Image src={image}/>
          <IconUser>
            <IconContext.Provider value={{ color:"#FFFFFF", className: "global-class-name", size: "2em" }}>
              <FaRegUserCircle />
            </IconContext.Provider>
          </IconUser>
        </Header>
        <Texto>
          Olá, fulano
        </Texto>
        {
          perks.map( (item) => (
            <Button key={item.id} onClick={()=> window.open(`${item.link}, "_blank" `)}>
              {item.title}
            </Button>
          ))
        }
        <ButtonContainer>
          <Button onClick={() => navigate("/planos")}>Mudar plano</Button>
          <ButtonCancelPlan onClick={() => handleDeleteSignature()}>Cancelar plano</ButtonCancelPlan>
        </ButtonContainer>

      </Container>
    </>
  );
}

export default Home;