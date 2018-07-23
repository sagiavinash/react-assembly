import React from 'react';
import appManager from '../../lib/AppManager';
import citiesReducer from './reducer';

appManager.register({
  name: 'Cities',
  reducers: {
    cities:  citiesReducer
  }
});

export default ({cities}) => (
  <p>cities: {cities.join()}</p>
);
