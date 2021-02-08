import createSagaMiddleware from 'redux-saga';

import reducers from './rootReducer';
import { rootSaga } from './rootSaga';
import { applyMiddleware, compose, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();

//@ts-ignore
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);