import React from 'react';
import Root from './component';
import UserDetails from '../UserDetails/container';
import Cities from '../Cities/container';

export default ({userDetails, cities}) => (
  <Root>
    <UserDetails userDetails={userDetails} />
    <Cities cities={cities} />
  </Root>
);
