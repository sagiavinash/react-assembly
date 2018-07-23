import React, {Component} from 'react';
import {Provider} from "react-redux";
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import storeManager from '../lib/storeManager';
import Root from './Root/container';

export default function App() {
  const store = storeManager.createStore({enhancer: applyMiddleware(thunk)});
  console.log('store.getState()', store.getState());

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
