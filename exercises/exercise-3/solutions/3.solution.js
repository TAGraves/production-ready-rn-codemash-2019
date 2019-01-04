// in login-screen.js:
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

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

  getLoginStatusText() {
    if (!this.state.isLoggedIn) {
      return 'You are not currently logged in.';
    }

    return `You are logged in as ${this.state.username}.`;
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
        <Text style={styles.loginStatus}>{this.getLoginStatusText()}</Text>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  loginStatus: {
    marginTop: 30,
  },
});