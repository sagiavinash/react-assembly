import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import storeManager from '../lib/storeManager';
import Root from './Root/container';

export default class extends Component {
  static childContextTypes = {
    storeManager: PropTypes.object
  };
  getChildContext = () => ({storeManager});
  componentWillMount() {
    const store = createStore(
      storeManager.createRootReducer(),
      applyMiddleware(thunk)
    );

    this.setState({store});

    storeManager.refreshStore = () => {
      this.state.store.replaceReducer(storeManager.createRootReducer());
      console.log('this.state.store.getState()', this.state.store.getState());
    }
  }
  render() {
    console.log('this.state.store.getState()', this.state.store.getState());
    return (
      <Provider store={this.state.store}>
        <Root />
      </Provider>
    );
  }
}


// import('path/to/module')
//   .then(storeManager.refreshStore)
