import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import { userLogin } from '../actions';
import ComponenteLogin from '../assets/Styles/login';
import walletMobile from '../assets/imgs/wallet-mobile.png';

const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const patternSenha = /^.{6,}$/;

const Login = () => {

  const disppatch = useDispatch();
  const [form, setForm] = useState({});
  const [isNotValid, setIsNotValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    const validEmail = document.getElementById('email').value;
    const validSenha = document.getElementById('senha').value;

    if (!patternEmail.test(validEmail)) {
      setShowError(true);
    } else {
      setShowError(false);
    }

    if (patternEmail.test(validEmail) && patternSenha.test(validSenha)) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  const submit = async () => {
    disppatch(userLogin(form));
  };

  return (
    <ComponenteLogin>
      <img src={ walletMobile } alt="ícone_carteira_no_telefone" />
      <p>
        <strong>Login</strong>
      </p>
      <div>
        <Input
          type="email"
          id="email"
          name="email"
          value={ form.email || '' }
          data-testid="email-input"
          onChange={ handleChange }
          placeholder="E-mail"
        />
      </div>
      <div>
        <Input
          type="password"
          id="senha"
          name="senha"
          value={ form.senha || '' }
          data-testid="password-input"
          onChange={ handleChange }
          placeholder="Senha"
        />
      </div>
      <div className="button">
        <Button type="primary" disabled={ isNotValid } onClick={ submit }>Entrar</Button>
      </div>
      <div>
        { showError
          ? (
            <p>
              <strong>Email invalido!</strong>
            </p>
          ) : '' }
      </div>
    </ComponenteLogin>
  );
};

export default Login;
