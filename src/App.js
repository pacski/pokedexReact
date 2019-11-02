import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import PokemonList from './components/pokemonList';
import Nav from './components/layouts/nav';
import PokemonDetails from './components/pokemonDetails';

class App extends React.Component{

  

  render(){

    return (

        <Router>
        <header>
        <Nav />
        </header>
        <Switch>
          <Route path="/:pName" component={PokemonDetails} />
          <Route path="/">
              <PokemonList />
          </Route>
        </Switch>
      </Router>
)
  
    
    
  };
}

export default App;