import React, { createContext, useEffect, useState,useRef } from "react";
import { useNavigate } from 'react-router';

import { api, createSession, createUser } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem("token");

    if(recoveredUser && token){
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, [])
  
  /*Essa é a função que vai receber do login essas duas informações abaixo como parâmetro */
  const login = async (email, password, isLoading, setIsLoading) => {
    try{
      const response = await createSession(email,password)
      
      console.log("login", response.data);

      //Uma vez tendo a informação de email e password eu deveria ir numa API e criar uma section. Depois essa API vai retornar um usuário que terá o nosso id e o nosso email. Por enquanto vamos simular isso depois colocar a API.

      /* Isso seria a resposta da minha section */
      const loggedUser = response.data; // É como está na API dele.
      const token = response.data.token;

      
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
      
      api.defaults.headers.Authorization = `Bearer ${token}`;
      
      setUser(loggedUser);
      navigate("/hoje");
    } catch (err) {
        console.log(err.msg);
        alert("Usuário não cadastrado, faça seu cadastro.");
        isLoading.placeholder = "ENTRAR";
        isLoading.disabled = false;
        setIsLoading({...isLoading});
      }
  }

  const signup = async (formData,isLoading,setIsLoading) => {
    try {
      const response = await createUser(formData);
      console.log(formData);

      console.log("signup",response.data);
      setIsLoading(false);
      navigate("/")
    } catch (e) {
      console.log(e.response);
      console.log("catch", formData);
      alert("Por favor, preencha os dados corretamente");
      isLoading.placeholder = "CADASTRAR";
      isLoading.disabled = false;
      setIsLoading({...isLoading});
    }
  }


//   const SignupComponent = (formData,isLoading,setIsLoading) => {
//     useEffect(() => {
//       async function signup(formData){
//         //Faça sua requisição aqui
//         try {
//           const response = await createUser(formData);
//           console.log(formData);
    
//           console.log("signup",response.data);
//           setIsLoading(false);
//           navigate("/")
//         } catch (e) {
//           console.log(e);
//           console.log("catch", formData);
//           alert("Por favor, preencha os dados corretamente");
//           isLoading.placeholder = "CADASTRAR";
//           isLoading.disabled = false;
//           setIsLoading({...isLoading});
//         }
//     }

//     signup();
// }, [])
//   }

  const logout = () => {
    console.log("logout"); 

    localStorage.remove("user");
    localStorage.remove("token");      
    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value= { {authenticated: !!user, user, loading, login, logout, signup } }>
      {children}
    </AuthContext.Provider>
  );
} 