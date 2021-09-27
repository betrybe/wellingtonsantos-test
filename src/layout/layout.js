import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from '../assets/Styles/layout';

const Layout = () => {

  return (
    <>
      <Header />
      <Main>
        { Children }
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
