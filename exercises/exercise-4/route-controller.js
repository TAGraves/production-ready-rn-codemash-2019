import React from 'react';
import { Route } from 'react-router';
import LoginScreen from './login-screen';

export default class RouteController extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/"
          component={LoginScreen}
        />
      </React.Fragment>
    );
  }
}