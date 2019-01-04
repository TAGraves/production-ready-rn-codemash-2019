// in message.js:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    const message = 'hello!'
    
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Here's a {this.props.isASecret ? 'secret' : ''} message for you: {message}</Text>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    border: '1px solid black',
    padding: 5,
  },
  message: {
    color: 'green',
  },
});
