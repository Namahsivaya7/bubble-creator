import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { Store } from './components/redux-components/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <React.StrictMode>

      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();