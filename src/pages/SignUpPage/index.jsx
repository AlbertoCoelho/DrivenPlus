import React, { useState, useContext } from 'react';

import { Wrapper, Container, StyledLink } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

import { AuthContext } from '../../contexts/auth';

const SignUpPage = () => {

  const { signup } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState( {placeholder: "CADASTRAR", disabled: false} );
  const [ formData, setFormData ] = useState({
    email:"",
    name:"",
    cpf:"",
    password:""
  });

  const handleSignUp = (e) => {
    e.preventDefault();

    signup(formData,isLoading,setIsLoading);

    isLoading.placeholder = <Loading />
    isLoading.disabled = true;
    setIsLoading({...isLoading});
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
          data-ls-module="charCounter" maxlength="11" 
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