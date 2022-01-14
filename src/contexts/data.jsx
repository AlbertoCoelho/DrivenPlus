import React, { createContext } from "react";
import { useNavigate } from "react-router";
import { makeSignature } from '../services/api';

export const DataContext = createContext();

export const DataProvider = ( {children} ) => {

  const navigate = useNavigate();


  const signature = async (signatureData) => {
    try{
      const response = await makeSignature(signatureData);
      const objectState = {
        image: response.data.image,
        perks: response.data.perks
      };
      console.log(signatureData);
      console.log("signature", response.data);
      navigate("/home", {state: objectState });
    } catch (e) {
      console.log(e.response);
      alert("Houve algum erro nos dados, por favor preencha-os novamente!");
    }
    
  }

  return (
    <DataContext.Provider value= { { signature } }>
    {children}
    </DataContext.Provider>
  );
}
