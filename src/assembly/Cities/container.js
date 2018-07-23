import {connect} from 'react-redux';
import storeManager from '../../lib/storeManager';
import Cities from './component';
import citiesReducer from './reducer';

storeManager.registerReducer({
  cities:  citiesReducer
});

export default connect((state) => ({
  cities: state.cities.data
}))(Cities);
