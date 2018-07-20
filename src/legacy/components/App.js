import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import Root from './Root';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
const App = connect((state) => state)(Root);


export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
