// in auth-controller.js:
import React from 'react';
import RouteController from './route-controller';

export default class AuthController extends React.Component {
  state = {
    username: undefined,
  }

  login = (username) => {
    this.setState({
      username,
    });
  }

  render() {
    return (
      <RouteController login={this.login} username={this.state.username} />
    );
  }
}

// in app.js:
import React from 'react';
import AuthController from './auth-controller';
import { NativeRouter } from 'react-router-native';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <AuthController />
      </NativeRouter>
    );
  }
}