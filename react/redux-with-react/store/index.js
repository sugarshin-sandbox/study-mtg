import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

let middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, require('redux-logger')()];
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}