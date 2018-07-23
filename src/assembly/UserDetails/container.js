import {connect} from 'react-redux';
import UserDetails from './component';
import {getUserDetails} from './actions';

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
