import { call, put, takeLatest } from 'redux-saga/effects';
import { START_GET_POKEMONS, doFindPokemon } from '../actions/pokeList';

import { findPokemons } from '../api/pokemon';

function* getPokemons({}) {
  try {
    let url = 'https://pokeapi.co/api/v2/pokemon';

    const { data } = yield call(findPokemons, url);
    const { results } = data;

    // console.log(results);
    // yield put(doFindPokemon(results));
    yield put({ type: START_GET_POKEMONS, results });
  } catch (error) {
    // yield put({ type: GET_POKEMONS_ERROR, error });
  }
}

export default function* renderPokemon() {
  yield takeLatest(START_GET_POKEMONS, getPokemons);
}
