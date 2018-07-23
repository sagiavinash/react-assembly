import React from "react";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import Root from './RootContainer';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
