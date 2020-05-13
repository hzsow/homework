import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { reducers } from './rootReducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSagas from './rootSagas';
import axios from 'axios';

axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
  },
  error => {
      Promise.reject(error)
  });
axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  if (error.response.status === 401) {
       localStorage.removeItem('token');
       localStorage.removeItem('userId');
       window.location.reload();
  }
  return Promise.reject(error);
});

const sagaMiddleware = createSagaMiddleware();

const composeSetup = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(
  reducers,
  composeSetup(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
