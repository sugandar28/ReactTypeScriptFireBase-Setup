import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes } from '../Routes'
import store from '../Redux/Store';
import { Firebase, FirebaseContext } from '../Firebase';
function App() {
  const firebase = new Firebase();
  return (
    <Provider store={store}>
      <FirebaseContext.Provider value={firebase}>
        <Router>
          <Routes />
        </Router>
      </FirebaseContext.Provider>
    </Provider>
  );
}

export { App };
