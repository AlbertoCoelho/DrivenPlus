import { Wrapper, Container, Button } from './style';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getPlans } from '../../services/api';

const Subscription = () => {

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect( () => {
    (async () => {
      const response = await getPlans();
      setPlans(response.data);
      setLoading(false);
    })(); 
  }, []);

  if(loading){
    return <h1>Carregando dados...</h1>
  }
  
  return (
    <Wrapper>
      <Container>
        <h1>Escolha seu Plano</h1>
        <ul>
        {
          plans.map( (plan) => (
            <Button key={plan.id} onClick={() => navigate(`/subscriptions/${plan.id}`)} >
              <img src={plan.image} alt="Logo" />
              <h2>{`R$ ${plan.price}`}</h2>  
            </Button>       
          )) 
        }
        </ul>
      </Container>
    </Wrapper>
  );
}

export default Subscription;