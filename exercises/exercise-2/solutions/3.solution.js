// in message.js:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {
    const message = 'hello!'
    
    return (
      <View>
        <Text>Here's a {this.props.isASecret ? 'secret' : ''} message for you: {message}</Text>
      </View>
    );
  }  
}
