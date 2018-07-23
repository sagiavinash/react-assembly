import React from 'react';
import Root from '../components/Root';
import UserDetailsContainer from './UserDetailsContainer';
import CitiesContainer from './CitiesContainer';

export default function RootContainer() {
  return (
    <Root>
      <UserDetailsContainer />
      <CitiesContainer />
    </Root>
  );
}
