import { useLocation } from 'react-router-dom';
import { Header, Container,Image,IconUser,Texto,Button,ButtonContainer,ButtonCancelPlan } from './style';

import { IconContext } from "react-icons";
import {FaRegUserCircle} from "react-icons/fa";

const Home = () => {

  const {image,perks} = useLocation().state;


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
        <Button></Button>
        <Button></Button>
        <ButtonContainer>
          <Button></Button>
          <ButtonCancelPlan></ButtonCancelPlan>
        </ButtonContainer>

      </Container>
    </>
  );
}

export default Home;