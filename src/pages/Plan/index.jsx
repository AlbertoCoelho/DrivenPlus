import { useState, useEffect } from "react";
import { GetPlan } from "../../services/api";

const Plan = () => {
 
    const [plan,setPlan] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect( () => {
      (async () => {
        const response = await GetPlan();
        setPlan(response.data);
        setLoading(false);
      })(); 
    }, []);

    if(loading){
      return <h1>Carregando dados...</h1>
    }
  
}

export default Plan;