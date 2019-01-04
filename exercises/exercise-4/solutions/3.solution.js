// in home-screen.js:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are logged in.</Text>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

// in login-screen.js:
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Link, withRouter } from 'react-router-native';

class LoginScreen extends React.Component {
  state = {
    username: '',
  }

  handleSubmit() {
    if (this.state.username.length > 3) {
      this.props.history.push('/home');
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

export default withRouter(LoginScreen);

// in route-controller.js:
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
          component={LoginScreen}
        />
        <Route
          exact path="/help"
          component={HelpScreen}
        />
        <Route
          exact path="/home"
          component={HomeScreen}
        />
      </React.Fragment>
    );
  }
}