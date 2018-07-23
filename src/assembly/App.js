import React, {Component} from 'react';
import {Provider} from "react-redux";
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import storeManager from '../lib/storeManager';
import Root from './Root/container';

export default class App extends Component {
  componentWillMount() {
    this.setState({
      store: storeManager.createStore({enhancer: applyMiddleware(thunk)})
    });
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <Root />
      </Provider>
    );
  }
}


// import('path/to/module')
//   .then(storeManager.refreshStore)
