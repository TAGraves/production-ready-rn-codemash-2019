// in login-screen.js:
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

export default class LoginScreen extends React.Component {
  state = {
    isLoggedIn: false,
    username: '',
  }

  handleSubmit() {
    if (this.state.username.length > 3) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => this.handleSubmit()}
          onChangeText={(text) => this.setState({ username: text })}
          placeholder="Username"
          value={this.state.username}
        />
        <Button 
          onPress={() => this.handleSubmit()}
          title="Login"
        />
        <Link to="/help"><Text>Help!</Text></Link>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

// in route-controller.js
import React from 'react';
import { Route } from 'react-router';
import LoginScreen from './login-screen';
import HelpScreen from './help-screen';

export default class RouteController extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/"
          component={LoginScreen}
        />
        <Route
          exact path="/help"
          component={HelpScreen}
        />
      </React.Fragment>
    );
  }
}