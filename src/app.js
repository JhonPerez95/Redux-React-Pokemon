import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import pokeList from './components/pokeList/pokeList';
import pokeInfo from './components/pokeInfo/pokeInfo';
import AppBar from './components/appBar/appBar';

const App = () => {
  return (
    <Router>
      <AppBar />
      <Route path="/pokelist" component={pokeList} />
      <Route path="/poke-info/:id/" component={pokeInfo} />
    </Router>
  );
};

export default App;
