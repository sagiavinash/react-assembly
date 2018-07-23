import {connect} from 'react-redux';
import storeManager from '../../lib/storeManager';
import Cities from './component';
import citiesReducer from './reducer';

storeManager.register({
  cities:  citiesReducer
});

export default connect((state) => ({
  cities: state.cities.data
}))(Cities);
