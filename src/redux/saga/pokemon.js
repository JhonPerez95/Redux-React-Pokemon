import { call, put } from 'redux-saga/effects';

import { doFindPokemonSuccess, doFindPokemonsError } from '../actions/pokeList';
import { findPokemons } from '../api/pokemon';

function* getPokemons(action) {
  try {
    // const result = yield call(fetchPokemons, action.payload.data)
    const { results } = yield call(findPokemons, action.payload);
    // console.log(results);
    yield put(doFindPokemonSuccess(results));
  } catch (error) {
    yield put(doFindPokemonsError(error));
  }
}

export { getPokemons };
