import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { makeSignature } from '../services/api';
import { deleteSignature } from "../services/api";

export const DataContext = createContext();

export const DataProvider = ( {children} ) => {

  const navigate = useNavigate();

  const signature = async (signatureData) => {
    try{
      const response = await makeSignature(signatureData);
      const objectState = {
        image: response.data.membership.image,
        perks: response.data.membership.perks
      };
      navigate("/home/", {state: objectState });
    } catch{
        alert("Houve algum erro nos dados, por favor preencha-os novamente!");
    }
  }

  const deletesig = async () => {
    try{
      const response = await deleteSignature();
      navigate("/subscriptions");
    } catch {
      console.log("Catch - Algo deu errado e não conseguiu deletar o plano, tem CERTEZA que deseja cancelar?", )
    }
  }

  return (
    <DataContext.Provider value= { { signature, deletesig } }>
    {children}
    </DataContext.Provider>
  );
}
