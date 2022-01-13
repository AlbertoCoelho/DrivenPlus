import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Wrapper, Container, StyledLink } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

import axios from 'axios';
import { createUser } from '../../services/api';

/* 
If you don't want to use an asynchronous function to create a user, just follow these simple steps:

1) Delete the SignUp folder located at src/pages/SignUp.
2) Copy this page into the pages folder located at src/pages.
3) Enter the auth.jsx file in the contexts folder and completely delete the signup function. Still in the auth.jsx file, in the return of the AuthProvider component, remove the signup from the value.

Happy hacking! 
*/

const SignUpPage = () => {

  const [isLoading, setIsLoading] = useState( {placeholder: "CADASTRAR", disabled: false} );
  const [ formData, setFormData ] = useState({
    email:"",
    name:"",
    cpf:"",
    password:""
  });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", {
      ...formData
    })

    isLoading.placeholder = <Loading />
    isLoading.disabled = true;
    setIsLoading({...isLoading});

    promise.then( response => {
      console.log(response);
      setIsLoading(false);
      navigate("/")
    })
    promise.catch( () => {
      alert("Por favor, preencha os dados corretamente");
      isLoading.placeholder = "CADASTRAR";
      isLoading.disabled = false;
      setIsLoading({...isLoading});
    })
    
  } 

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

return (
  <Wrapper>
    <Container>
      <form onSubmit={handleSignUp}>
        <Input
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          placeholder="email"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Input
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
          placeholder="senha"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Input
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          placeholder="nome"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Input
          type="text"
          value={formData.cpf}
          onChange={handleInputChange}
          name="cpf"
          placeholder="cpf"
          disabled={isLoading.disabled && "disabled"}
          required
        />
        <Button type="submit" desabilitar={isLoading.disabled}>
        {isLoading.placeholder}
        </Button>
      </form>
      <StyledLink to="/">Já possuí uma conta? Entre</StyledLink>
    </Container>
  </Wrapper>
);
}

export default SignUpPage;