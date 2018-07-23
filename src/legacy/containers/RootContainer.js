import React, {Component} from 'react';
import Root from '../components/Root';
import CitiesContainer from './CitiesContainer';

export default class RootContainer extends Component {
  state = {
    UserDetailsContainer: null
  };
  componentDidMount() {
    import('./UserDetailsContainer')
      .then((module) => {
        this.setState({UserDetailsContainer: module.default});
      });
  }
  render() {
    const {UserDetailsContainer} = this.state;

    return UserDetailsContainer ? (
      <Root>
        <UserDetailsContainer />
        <CitiesContainer />
      </Root>
    ) : null;
  }
}
