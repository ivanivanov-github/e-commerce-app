import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './screens/Login';
import Admin from './screens/Admin';
import Vendeur from './screens/Vendeur';
import Contact from './screens/Contact.jsx';
import Erreur from './screens/Erreur';
import Produit from './screens/Produit';
import Produits from './screens/Produits';
import './style.css';

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/'><Login /></Route>
        <Route exact path='/produits'><Produits /></Route>
        <Route exact path='/produit'><Produit /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/vendeur'><Vendeur /></Route>
        <Route exact path='/admin'><Admin /></Route>
        <Route exact path='*'><Erreur /></Route>
      </Switch>
    </div>
  );
}

export default App;
