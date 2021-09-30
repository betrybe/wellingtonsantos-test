import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader, Button } from 'antd';
import { isAuthenticated, getToken } from '../config/auth';
import { userLogout } from '../actions';
import { tratarMoeda } from '../utils/tratarMoeda';

import HeaderApp from '../assets/Styles/layout/header';

const Header = () => {
  const dispatch = useDispatch();
  const moeda = useSelector((state) => state.wallet.moedas);
  const despesas = useSelector((state) => state.global.wallet.expenses);
  const BRL = tratarMoeda(moeda).map((item) => item.codein);

  useEffect(() => {
    getToken();
  }, []);

  const somaDespesas = despesas.reduce((valor, somar) => Number(somar.valor) + Number(valor), 0);

  const resultDespesas = Math.round((somaDespesas + Number.EPSILON) * 100) / 100;

  const logOut = () => {
    dispatch(userLogout());
  };

  return (
    <HeaderApp>
      <PageHeader
        className="site-page-header"
        title="TryBe Wallet"
        subTitle={ getToken() }
        data-testid="email-field"
        extra={ isAuthenticated() ? [
          <div className="div-header">
            <p data-testid="total-field">
              Despesa total: R$
              { resultDespesas }
              <span data-testid="header-currency-field">
                { BRL[0] }
              </span>
            </p>
            <Button
              className="button" key="1" type="danger"
              onClick={ () => logOut() }
            >
              Logout
            </Button>
          </div>,
        ]
          : [
            <p>Organize as despesas!</p>,
          ]
        }
      />
    </HeaderApp>
  );
};

export default Header;
