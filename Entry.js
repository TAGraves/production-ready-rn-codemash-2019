import React from 'react';
import { SafeAreaView, Text, UIManager } from 'react-native';
import CURRENT_EXERCISE from './current-exercise.js';

const exercises = {
  2: require(`./exercises/exercise-2/app`).default,
  3: require('./exercises/exercise-3/app').default,
  4: require('./exercises/exercise-4/app').default,
  5: require('./exercises/exercise-5/entry-point').default,
  6: require('./exercises/exercise-6/app').default,
}

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

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