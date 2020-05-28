import { call, put } from 'redux-saga/effects';

import { findPokeInfo } from '../api/pokemon';
import { doSuccesInfo, doErrorInfo } from '../actions/pokeInfo';

function* getPokeInfo(action) {
  try {
    const id = action.payload;
    const result = yield call(findPokeInfo, `${id}`);
    // console.log(result);
    yield put(doSuccesInfo(result));
  } catch (error) {
    yield put(doErrorInfo(error));
  }
}

export { getPokeInfo };
