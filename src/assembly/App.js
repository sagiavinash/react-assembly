import React, {Component} from "react";
import {Provider} from "react-redux";
import appManager from '../lib/AppManager';
import Root from './Root/Root';

export default class extends Component {
  componentWillMount() {
    // console.log(appManager.register);
    appManager.bootstrap();
  }
  render() {
    console.log(appManager.store);
    return (
      <Provider store={appManager.store}>
        <Root />
      </Provider>
    );
  }
}
