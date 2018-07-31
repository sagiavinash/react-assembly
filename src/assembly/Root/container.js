import React, {Component} from 'react';
import {withRefreshedStore} from 'redux-store-manager';
import Root from './component';
import Cities from '../Cities/container';

export default class RootContainer extends Component {
  state = {
    UserDetails: null
  };
  componentDidMount() {
    withRefreshedStore(import('../UserDetails/container'))
      .then((module) => {
        this.setState({UserDetails: module.default});
      });
  }
  render() {
    const {UserDetails} = this.state;

    return UserDetails ? (
      <Root>
        <UserDetails />
        <Cities />
      </Root>
    ) : null;
  }
}
