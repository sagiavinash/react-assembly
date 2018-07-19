import {combineReducers} from 'redux';

function userDetailsReducer(state = {id: 1}, action) {
  return state;
}

function citiesReducer(state = ['Hyderabad'], action) {
  return state;
}

export default combineReducers({
  userDetails: userDetailsReducer,
  cities: citiesReducer,
});
