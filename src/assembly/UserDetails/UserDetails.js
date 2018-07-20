import React from 'react';
import appManager from '../../lib/AppManager';
import userDetailsReducer from './reducer';

appManager.register({
  name: 'UserDetails',
  dataDependencies: [{
    name: 'userDetails',
    value: userDetailsReducer
  }],
  // actionCreators: [],
  // services: []
});

export default ({userDetails}) => (
  <p>user: {userDetails.id}</p>
);
