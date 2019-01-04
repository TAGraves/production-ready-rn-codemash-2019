import React from 'react';
import App from './app';
import { NativeRouter } from 'react-router-native';

export default class EntryPoint extends React.Component {
  render() {
    return (
      <NativeRouter>
        <App />
      </NativeRouter>
    );
  }
}