import { useState, useContext } from 'react';

import { Wrapper, Container, Logo, StyledLink } from './style';
import DrivenPlusLogo from '../../assets/DrivenPlusLogo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

import { AuthContext } from '../../contexts/auth'

const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState( {placeholder: "ENTRAR", disabled: false} );
  
  const handleLogin = (e) => {
    e.preventDefault();

    login(email,password,isLoading,setIsLoading);

    isLoading.placeholder = <Loading/>
    isLoading.disabled = true;
    setIsLoading({...isLoading});
  }

  return (
    <Wrapper>
      <Container>
        <Logo src={DrivenPlusLogo} alt='Logo' />
        <form onSubmit={handleLogin}>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" disabled={isLoading.disabled && "disabled"}  required/>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" disabled={isLoading.disabled && "disabled"} required />
          <Button type="submit" desabilitar={isLoading.disabled}>
          {isLoading.placeholder}
          </Button>
        </form>
        <StyledLink to="/sign-up">Não possuí uma conta? Cadastre-se</StyledLink>
      </Container>
    </Wrapper>
  );
}
  
export default LoginPage;