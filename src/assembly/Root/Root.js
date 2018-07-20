import {connect} from "react-redux";
import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import Cities from '../Cities/Ciites';

const Root = ({userDetails, cities}) => (
  <div>
    <UserDetails userDetails={userDetails} />
    <Cities cities={cities} />
  </div>
);

export default connect((state) => state)(Root);
