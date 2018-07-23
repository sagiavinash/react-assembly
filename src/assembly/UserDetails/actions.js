import {GET_USER_DETAILS} from '../constants';
import {fetchUserDetails} from './services';

export const getUserDetails = () => (dispatch) => {
  fetchUserDetails().then((data) => dispatch({
    type: GET_USER_DETAILS,
    data
  }))
};
