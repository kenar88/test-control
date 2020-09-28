import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

import App from './App.js';
import control from './reducer';
import './styles/index.scss';

const roodReducer = combineReducers({
  control,
  form: formReducer,
});
const store = createStore(roodReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
