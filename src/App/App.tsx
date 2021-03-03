import React from 'react';

import '../App.css';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { Demo } from '../Components';

function App() {
  return (
    <Provider store={store}>
      <Demo/>
    </Provider>
  );
}

export { App };
