import React from 'react';
import { View, Button, Animated, StyleSheet, LayoutAnimation, UIManager } from 'react-native';

export default class Playground extends React.Component {
  triangleYPosition = new Animated.Value(100)

  state = {
    swapped: false,
  }

  handlePress() {
    Animated.timing(
      this.triangleYPosition,
      {
        toValue: 200,
        duration: 1000,
      }
    ).start()
    
    this.setState({
      swapped: !this.state.swapped,
    });
  }

  getTriangleStyle() {
    if (this.state.swapped) {
      return [styles.triangle, styles.bottomRight];
    }

    return [styles.triangle, styles.topLeft];
  }

  getSquareStyle() {
    if (this.state.swapped) {
      return [styles.square, styles.topLeft];
    }

    return [styles.square, styles.bottomRight];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={this.getTriangleStyle()} />
        <Animated.View style={[styles.triangle, styles.topRight, {
          top: this.triangleYPosition,
        }]} />
        <View style={this.getSquareStyle()} />
        {this.state.swapped && (
          <View style={[styles.square, styles.bottomLeft]} />
        )}
        <Button
          title="Press to play animation!"
          onPress={() => this.handlePress()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    position: 'absolute',
  },
  topLeft: {
    top: 50,
    left: 20,
  },
  bottomRight: {
    bottom: 50,
    right: 20,
  },
  bottomLeft: {
    bottom: 50,
    left: 20,
  },
  topRight: {
    top: 50,
    right: 20,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});