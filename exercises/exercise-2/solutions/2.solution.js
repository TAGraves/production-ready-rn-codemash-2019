// in message.js:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    const message = 'hello!'
    const isASecret = true;
    
    return (
      <View>
        <Text>Here's a {isASecret ? 'secret' : ''} message for you: {message}</Text>
      </View>
    );
  }  
}
