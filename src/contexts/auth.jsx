import React, { createContext, useEffect, useState } from "react";
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

      const loggedUser = response.data;
      const token = response.data.token;

      
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
      
      api.defaults.headers.Authorization = `Bearer ${token}`;
      
      setUser(loggedUser);
      navigate("/subscriptions");
    } catch{
        alert("Usuário não cadastrado, faça seu cadastro.");
        isLoading.placeholder = "ENTRAR";
        isLoading.disabled = false;
        setIsLoading({...isLoading});
      }
  }

  const signup = async (formData,isLoading,setIsLoading) => {
    try {
      const response = await createUser(formData);
      setIsLoading(false);
      navigate("/")
    } catch{
      alert("Por favor, preencha os dados corretamente");
      isLoading.placeholder = "CADASTRAR";
      isLoading.disabled = false;
      setIsLoading({...isLoading});
    }
  }

  const logout = () => {
    localStorage.remove("user");
    localStorage.remove("token");      
    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider value= { {authenticated: !!user, user, loading, login, logout,signup } }>
      {children}
    </AuthContext.Provider>
  );
} 