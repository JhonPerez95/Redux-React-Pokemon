import { all } from 'redux-saga/effects';

import renderPokemon from './pokemon';

export default function* rootSaga() {
  yield all([renderPokemon()]);
}
