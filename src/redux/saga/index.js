import { takeEvery, all } from 'redux-saga/effects';

import { START_GET_POKEMONS } from '../actions/pokeList';
import { START_INFO_POKEMON } from '../actions/pokeInfo';

import { getPokemons } from './pokemon';
import { getPokeInfo } from './pokeInfo';

function* watchAll() {
  yield all([takeEvery(START_GET_POKEMONS, getPokemons)]);
  yield all([takeEvery(START_INFO_POKEMON, getPokeInfo)]);
}

export default watchAll;
