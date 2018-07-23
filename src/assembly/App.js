import React, {Component} from "react";
import {Provider} from "react-redux";
import storeManager from '../lib/storeManager';
import Root from './Root/container';

export default class extends Component {
  state = {
    store: null
  };
  componentWillMount() {
    storeManager.bootstrap();


    this.setState({store: storeManager.store});

    storeManager.refreshStore = () => {
      storeManager.bootstrap({initialState: this.store.getState()});

      this.setState({store: storeManager.store});
    }
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
