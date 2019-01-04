import React from 'react';
import RouteController from './route-controller';
import { NativeRouter } from 'react-router-native';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <RouteController />
      </NativeRouter>
    );
  }
}