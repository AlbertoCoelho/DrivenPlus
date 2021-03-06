import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';

import GlobalStyle from "./styles/GlobalStyle";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Subscription from './pages/Subscription';
import Plan from './pages/Plan';
import Home from './pages/Home';
import TelaDePlanos from './pages/TelaDePlanos';

import { AuthProvider, AuthContext } from './contexts/auth';
import { DataProvider } from './contexts/data';

const AppRoutes = () => {

  const Private = ( {children} ) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return <h1>Carregando...</h1>
    }

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children;
  }

  return (
  <Router>
    <AuthProvider>
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/sign-up" element={ <SignUp /> } />
          <Route exact path="/subscriptions" element={ <Private> <Subscription /> </Private> } />
          <Route exact path="/subscriptions/:ID_DO_PLANO" element={ <Private> < Plan/> </Private> } />
          <Route exact path="/home" element={<Private> <Home /> </Private> } />
          <Route exact path="/planos" element={<Private> <TelaDePlanos /> </Private>} />
        </Routes> 
        <GlobalStyle />
      </DataProvider>
    </AuthProvider>
  </Router>
  );
}

export default AppRoutes;