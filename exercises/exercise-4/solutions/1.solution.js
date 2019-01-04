// in help-screen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HelpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Need help?</Text>
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
import HelpScreen from './help-screen';

export default class RouteController extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact path={'/'}
          component={HelpScreen}
        />
      </React.Fragment>
    );
  }
}