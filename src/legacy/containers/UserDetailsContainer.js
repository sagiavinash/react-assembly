import {connect} from 'react-redux';
import UserDetails from '../components/UserDetails';
import {getUserDetails} from '../actions/userDetails';

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
