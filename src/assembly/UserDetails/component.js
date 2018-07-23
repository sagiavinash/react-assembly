import React, {Component} from 'react';
import appManager from '../../lib/AppManager';
import userDetailsReducer from './reducer';

appManager.register({
  name: 'UserDetails',
  reducers: {userDetails: userDetailsReducer}
});

export default class UserDetails extends Component {
  componentWillMount() {
    this.props.getUserDetails();
  }
  render() {
    const {userDetails, isUserDetailsLoading} = this.props;

    return (
      <p>{
        !isUserDetailsLoading ?
          `user: ${userDetails.id}` :
          'Loading user details...'
      }</p>
    );
  }
}
