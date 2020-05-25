import { call, put, takeEvery } from 'redux-saga/effects';
import { FIND_POKEMONS, FIND_POKEMONS_ERROR } from '../actions/pokeList';

import { findPokemons } from '../api/pokemon';

function* handleFindPokemons(action) {
  try {
    const results = yield call(findPokemons, action.payload.data);
    console.log('ejecutada Saga', results);
    yield put({ type: FIND_POKEMONS, results });
  } catch (error) {
    yield put({ type: FIND_POKEMONS_ERROR, error });
  }
}

export default function* renderPokemon() {
  yield takeEvery(FIND_POKEMONS, handleFindPokemons);
}
