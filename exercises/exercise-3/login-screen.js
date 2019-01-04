import React from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => {}}
          placeholder="Username"
        />
        <Button 
          onPress={() => {}}
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