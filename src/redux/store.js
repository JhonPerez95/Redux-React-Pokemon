import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga/';

// Create Saga
const sagaMiddleware = createSagaMiddleware();

// Initialize Store  - State
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// initialize Saga
sagaMiddleware.run(rootSaga);

export default store;
