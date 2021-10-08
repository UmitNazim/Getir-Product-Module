import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import { Provider } from 'react-redux';
import App from './App';
import './locales';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
