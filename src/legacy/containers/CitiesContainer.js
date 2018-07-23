import {connect} from 'react-redux';
import Cities from '../components/Cities';

const mapStateToProps = (state) => ({
  cities: state.cities.data
});

export default connect(
  mapStateToProps
)(Cities);
