import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import storeManager from 'redux-store-manager';
import Root from './Root/container';

export default function App() {
  return (
    <Provider store={storeManager.createStore(applyMiddleware(thunk))}>
      <Root />
    </Provider>
  );
}
