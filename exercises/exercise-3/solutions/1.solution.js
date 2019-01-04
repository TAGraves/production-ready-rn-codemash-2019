// in login-screen.js:
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default class LoginScreen extends React.Component {
  handleSubmit() {
    Alert.alert('You clicked the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => {}}
          placeholder="Username"
        />
        <Button 
          onPress={() => this.handleSubmit()}
          title="Login"
        />
        <Text style={styles.loginStatus}>You are not currently logged in.</Text>
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