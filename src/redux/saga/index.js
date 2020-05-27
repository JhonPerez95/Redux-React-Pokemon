import { takeEvery, all } from 'redux-saga/effects';
import { START_GET_POKEMONS } from '../actions/pokeList';
import { getPokemons } from './pokemon';

function* watchAll() {
  yield all([takeEvery(START_GET_POKEMONS, getPokemons)]);
}

export default watchAll;
