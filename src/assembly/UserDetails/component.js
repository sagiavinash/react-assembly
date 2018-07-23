import React, {Component} from 'react';

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
