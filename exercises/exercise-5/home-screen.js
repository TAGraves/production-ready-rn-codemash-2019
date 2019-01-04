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
