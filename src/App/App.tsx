import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes } from '../Routes'
import store from '../Redux/Store';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes />
        </Router>
    </Provider>
  );
}

export { App };
