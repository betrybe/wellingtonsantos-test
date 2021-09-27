import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated, getToken } from '../config/auth';
import { userLogout } from '../actions';
import { tratarMoeda } from '../utils/tratarMoeda';
import { PageHeader, Button } from 'antd';
import HeaderApp from '../assets/Styles/layout/header';
const Header = () => {

  const dispatch = useDispatch();
  const moeda = useSelector(state => state.wallet.moedas);
  const BRL = tratarMoeda(moeda).map(item => item.codein);

  const [totalDespesa, setTotalDespesa] = useState(0);

  useEffect(() => {
    getToken()
  }, []);

  const logOut = () => {
    dispatch(userLogout())
  };

  return (
    <HeaderApp>
      <PageHeader
        className="site-page-header"
        title="TryBe Wallet"
        subTitle={getToken()}
        data-testid="email-field"
        extra={isAuthenticated() ? [
          <div className="div-header">
            <p data-testid="total-field" >Despesa total: R${totalDespesa} <span data-testid="header-currency-field" >{BRL[0]}</span></p>
            <Button className="button" key="1" type="danger" onClick={() => logOut()} >Logout</Button>
          </div>
        ]
          :
          [
            <p>Organize as despesas!</p>
          ]}
      />
    </HeaderApp>
  )
};

export default Header;

