import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";

import { getPlan } from "../../services/api";
import { Wrapper,Container,Image,FirstIcon,SecondIcon,IconBack,FistText,SecondText } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SmallInputMarginRight from '../../components/SmallInputMarginRight';
import SmallInputNoMarginRight from '../../components/SmallInputNoMarginRight';
import Overlay from '../../components/Overlay';

import { IconContext } from "react-icons";
import {VscChecklist} from "react-icons/vsc"
import {FaMoneyBillWave} from "react-icons/fa";
import {IoMdArrowRoundBack} from "react-icons/io";


const Plan = () => {

    const { ID_DO_PLANO } = useParams();
    const navigate = useNavigate();
 
    const [plan,setPlan] = useState({});
    const [loading,setLoading] = useState(true);
    const [cardName, setCardName] = useState("");
    const [cardNumber,setCardNumber] = useState("");
    const [securityNumber, setSecurityNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState("");
    const [hidden,setHidden] = useState(true);

    const signatureData = {
      membershipId: plan.id,
      cardName: cardName,
      cardNumber: cardNumber,
      securityNumber: securityNumber,
      expirationDate: expirationDate
    }

    useEffect( () => {
      (async () => {
        const response = await getPlan(ID_DO_PLANO);
        setPlan(response.data);
        setLoading(false);
      })(); 
    }, []);

    if(loading){
      return <h1>Carregando dados...</h1>
    }

    const handleForm = (e) => {
      e.preventDefault();
    }

    return (
      <Wrapper>
        <Container>
          <IconBack onClick={() => navigate("/subscriptions")}>
            <IconContext.Provider value={{ color:"#FFFFFF", className: "global-class-name", size: "2em" }}>
              <IoMdArrowRoundBack />
            </IconContext.Provider>
          </IconBack>
          <Image src={plan.image} />
          <h1>{plan.name}</h1>
          <FirstIcon>
            <IconContext.Provider value={{ color:"#FF4791", className: "global-class-name" }}>
              <VscChecklist />
            </IconContext.Provider>
            <h2>Benefícios:</h2>
          </FirstIcon>
          <FistText>
            <ul>
              {
                plan.perks.map( (item) => (
                  <li key={item.id}>
                    {item.id}. {item.title}
                  </li>
                ))
              }
            </ul>
          </FistText>
          <SecondIcon>
            <IconContext.Provider value={{ color:"#FF4791", className: "global-class-name" }}>
              <FaMoneyBillWave />
            </IconContext.Provider>
            <h2>Preco:</h2>
          </SecondIcon>
          <SecondText>
            <h3>R$ {plan.price} cobrados mensalmente</h3>
          </SecondText>
          <form onSubmit={handleForm}>
            <Input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Nome impresso no cartão" required />
            <Input type="text" value={cardNumber} maxLength="19" minLength="16" onChange={(e) => setCardNumber(e.target.value)} placeholder="Digitos do cartão" required />
            <SmallInputMarginRight type="number" maxLength="3" minLength="3" value={securityNumber} onChange={(e) => setSecurityNumber(e.target.value)} placeholder="Código de segurança" required />
            <SmallInputNoMarginRight type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} placeholder="Validade" required />
            <Button type="submit" onClick={() => setHidden(false) }>
              ASSINAR
            </Button>
        </form>
        {(hidden === false) ? <Overlay name={plan.name} price={plan.price} setHidden={setHidden} signatureData={signatureData} /> : null}
        </Container>
      </Wrapper>
    );  
}

export default Plan;