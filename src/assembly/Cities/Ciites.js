import React from 'react';
import appManager from '../../lib/AppManager';
import citiesReducer from './reducer';

appManager.register({
  name: 'Cities',
  dataDependencies: [{
    name: 'cities',
    value: citiesReducer
  }],
  // actionCreators: [],
  // services: []
});

export default ({cities}) => (
  <p>cities: {cities.join()}</p>
);
