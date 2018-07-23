import {combineReducers} from 'redux';
import reduceReducers from 'reduce-reducers';
import userDetailsReducer from './userDetails';
import citiesReducer from './cities';

export default combineReducers({
  userDetails: reduceReducers(userDetailsReducer),
  cities: citiesReducer,
});
