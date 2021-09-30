import React from 'react';
import Header from './header';
import Main from '../assets/Styles/layout';

const Layout = ({ nomeDaPagina, children }) => {

  document.title = nomeDaPagina;
  return (
    <>
      <Header titulo={ nomeDaPagina } />
      <Main>
        { children }
      </Main>
    </>
  );
};

export default Layout;
