// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your global styles
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Render the app and provide the Redux store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);