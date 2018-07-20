import React from 'react';
import UserDetails from './UserDetails';
import Cities from './Cities';

const Root = ({userDetails, cities}) => (
  <div>
    <UserDetails userDetails={userDetails} />
    <Cities cities={cities} />
  </div>
);

export default Root;
