import {fetchUserDetails} from '../services';
import {GET_USER_DETAILS} from '../constants';


export const getUserDetails = () => (dispatch) => {
  fetchUserDetails().then((data) => dispatch({
    type: GET_USER_DETAILS,
    data
  }))
};
