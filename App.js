import React from 'react';
import { SafeAreaView, Text } from 'react-native';
const CURRENT_EXERCISE = 2;

const exercises = {
  2: require(`./exercises/exercise-2/app`).default,
}

export default class App extends React.Component {
  render() {
    const AppForExercise = exercises[CURRENT_EXERCISE];

    return (
      <SafeAreaView>
        <Text>Exercise {CURRENT_EXERCISE}</Text>
        <AppForExercise />
      </SafeAreaView>
    );
  }
}