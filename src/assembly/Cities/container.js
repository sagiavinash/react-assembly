import {connect} from 'react-redux';
import Cities from './component';

export default connect((state) => ({
  cities: state.cities.data
}))(Cities);
