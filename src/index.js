import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css';
import App from './App';
import ReduxIntlProvider from './utils/providers/ReduxIntlProvider';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxIntlProvider>
        <App />
      </ReduxIntlProvider>
    </Provider>
  </React.StrictMode>
);
