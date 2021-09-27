import Header from './header';
import Footer from './footer';
import React from 'react';
import Main from '../assets/Styles/layout';

const Layout = (props) => {

    // setar o titulo da pagina
    document.title = props.nomeDaPagina;
    return (
        <React.Fragment>
            <Header titulo={props.nomeDaPagina} />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </React.Fragment>

    )
};

export default Layout;