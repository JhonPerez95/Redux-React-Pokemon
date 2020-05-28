import { combineReducers } from 'redux';

import pokeList from './pokeList';
import pokeInfo from './pokeInfo';
const rootReducer = combineReducers({
  pokeList,
  pokeInfo,
});

export default rootReducer;
