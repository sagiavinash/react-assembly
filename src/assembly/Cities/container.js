import {connect} from 'react-redux';
import storeManager from 'redux-store-manager';
import Cities from './component';
import citiesReducer from './reducer';

storeManager.registerReducers({
  cities:  citiesReducer
});

export default connect((state) => ({
  cities: state.cities.data
}))(Cities);
