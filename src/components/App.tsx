import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderNavbar from './utils/navbar/HeaderNavbar';
import Home from './pages/Home';
import BeersList from './pages/beers/BeersList';
import BeerNew from './pages/beers/BeerNew';
import BeerDetail from './pages/beers/BeerDetail';
import Login from './pages/user/Login';
import { beerDetail, beerList, beerNew, home, login } from '../constants';
import ProtectedRoute from './utils/ProtectedRoute';

export default function App() {
  return (
    <>
      <Router>
        <HeaderNavbar />
        <Switch>
          <Route exact path={home} component={Home} />
          <Route exact path={login} component={Login} />
          <Route exact path={beerList} component={BeersList} />
          <ProtectedRoute exact path={beerNew} component={BeerNew} />
          <Route exact path={beerDetail} component={BeerDetail} />
        </Switch>
        <ToastContainer />
      </Router>
    </>
  );
}
