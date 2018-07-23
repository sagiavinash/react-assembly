import {GET_USER_DETAILS} from '../constants';

const initialState = {
  data: null,
  isLoading: true
};

export default function userDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS: {
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    }
    default: return state;
  }
}
