import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import Admin from './screens/Admin';
import AddProduct from './screens/AddProduct';
import Checkout from './screens/Checkout';
import Erreur from './screens/Erreur';
import Product from './screens/Product';
import Cart from './screens/Cart';
import NonExistingPage from './screens/NonExistingPage';
import './style.css';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/'><Login /></Route>
        <Route exact path='/home'><Home /></Route>
        <Route exact path='/products'><AddProduct /></Route>
        <Route exact path='/product'><Product /></Route>
        <Route exact path='/cart'><Cart /></Route>
        <Route exact path='/admin'><Admin /></Route>
        <Route exact path='/erreur'><Erreur /></Route>
        <Route exact path='/checkout'><Checkout /></Route>
        <Route path='*'><NonExistingPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
