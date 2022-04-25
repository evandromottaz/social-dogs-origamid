import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Styles from '../styles/Login.styled';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <Styles className="animation">
      <div className="form">
        <Routes>
          <Route path="/" end element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route
            path="*"
            element={<NotFound text="Usuário não encontrado." />}
          />
        </Routes>
      </div>
    </Styles>
  );
};

export default Login;
