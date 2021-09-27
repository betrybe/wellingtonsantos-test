import React from 'react';
import { Router, Redirect } from '@reach/router';
import { isAuthenticated } from './config/auth';
import Layout from './layout/layout';
import Login from './pages/Login';
import Wallet from './pages/Wallet';


const Routers = () => {


  const UserRoute = ({ component: Component, ...all }) => {
    if (!isAuthenticated()) {
      return <Redirect to="/" />
    }
    return <Component {...all} />
  }

  return (

    <Layout nomeDaPagina="TryBe Wallet">
      <Router>
        <Login path="/" />
        <UserRoute path="/carteira" component={Wallet} />
      </Router>
    </Layout>
  )

}

export default Routers;
