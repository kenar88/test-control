import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

import App from './App.js';
import control from './reducer';
import './styles/index.scss';

const middlewareEnhancer  = compose(applyMiddleware(logger), composeWithDevTools());
const roodReducer = combineReducers({
  control,
  form: formReducer,
});
const store = createStore(roodReducer, middlewareEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
