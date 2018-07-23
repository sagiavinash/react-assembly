import {combineReducers} from 'redux';
import userDetailsReducer from './userDetails';
import citiesReducer from './cities';

export default combineReducers({
  userDetails: userDetailsReducer,
  cities: citiesReducer,
});
