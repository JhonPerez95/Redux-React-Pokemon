import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import pokeList from './components/pokeList/pokeList';
import pokeInfo from './components/pokeInfo/pokeInfo';
import AppBar from './components/appBar/appBar';

const Root = (
  <Provider store={store}>
    <Router>
      <AppBar />
      <Route path="/pokelist" component={pokeList} />
      <Route path="/poke-info/:id/" component={pokeInfo} />
    </Router>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
