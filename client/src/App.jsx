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

  // async function checkPassword(passwordInput) {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/checkpassword', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({'id': passwordInput }) // body data type must match "Content-Type" header 
  //     })
  //     const ready = await response.json()
  //     return ready
  //   } catch (error) { 
  //     console.log(error) 
  //   }
    // 
  // }
  return (
    <div>
      <Switch>
        {/* <Route exact path='/'><Login authorized={checkPassword} /></Route> */}
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
