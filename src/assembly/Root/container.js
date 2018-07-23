import React, {Component} from 'react';
import storeManager from '../../lib/storeManager';
import Root from './component';
import Cities from '../Cities/container';

export default class RootContainer extends Component {
  state = {
    UserDetails: null
  };
  componentDidMount() {
    import('../UserDetails/container')
      .then((module) => {
        storeManager.refreshStore();

        this.setState({UserDetails: module.default});
      });
  }
  render() {
    const {userDetails, cities} = this.props;
    const {UserDetails} = this.state;

    return UserDetails ? (
      <Root>
        <UserDetails userDetails={userDetails} />
        <Cities cities={cities} />
      </Root>
    ) : null;
  }
}
