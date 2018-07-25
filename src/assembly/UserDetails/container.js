import {connect} from 'react-redux';
import storeManager from 'redux-store-manager';
import UserDetails from './component';
import {getUserDetails} from './actions';
import userDetailsReducer from './reducer';

storeManager.registerReducers({
  userDetails: userDetailsReducer
});

const mapStateToProps = (state) => ({
  userDetails: state.userDetails.data,
  isUserDetailsLoading: state.userDetails.isLoading
});

const mapDispatchToProps = {
  getUserDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
