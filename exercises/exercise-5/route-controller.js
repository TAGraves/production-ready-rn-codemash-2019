import React from 'react';
import { Route } from 'react-router';
import LoginScreen from './login-screen';
import HelpScreen from './help-screen';
import HomeScreen from './home-screen';

export default class RouteController extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/"
          render={() => <LoginScreen login={this.props.login} />}
        />
        <Route
          exact path="/help"
          component={HelpScreen}
        />
        <Route
          exact path="/home"
          render={() => <HomeScreen username={this.props.username} />}
        />
      </React.Fragment>
    );
  }
}