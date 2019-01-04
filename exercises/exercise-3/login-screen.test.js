import LoginScreen from './login-screen';
import { render, fireEvent } from 'react-native-testing-library';
import React from 'react';
import { Alert } from 'react-native';
// To run tests in this file, run yarn test exercises/exercise-3 in your terminal.

describe('<LoginScreen />', () => {
  describe('1', () => {
    describe('when the login button is clicked', () => {
      it('opens an alert', () => {
        Alert.alert = jest.fn();
        const { getByText } = render(<LoginScreen />);

        fireEvent.press(getByText(/Login/));

        expect(Alert.alert).toBeCalled();
      });
    });
  });

  describe('2', () => {
    describe('when the login button is clicked', () => {
      it('logs the user in', () => {
        const { getByText } = render(<LoginScreen />);

        getByText(/You are not currently logged in/);
        fireEvent.press(getByText(/Login/));

        getByText(/You are logged in/);
      });
    });
  });

  describe('3', () => {
    describe('when the login button is clicked', () => {
      describe('when the entered username is fewer than three characters', () => {
        it('does not log the user in', () => {
          const { getByText, getByPlaceholder } = render(<LoginScreen />);

          getByText(/You are not currently logged in/);
          fireEvent.changeText(getByPlaceholder('Username'), 'abc');
          fireEvent.press(getByText(/Login/));

          getByText(/You are not currently logged in/);
        });
      });

      describe('when the entered username is longer than three characters', () => {
        it('logs the user in', () => {
          const { getByText, getByPlaceholder } = render(<LoginScreen />);

          getByText(/You are not currently logged in/);
          fireEvent.changeText(getByPlaceholder('Username'), 'user');
          fireEvent.press(getByText(/Login/));

          getByText(/You are logged in as user/);
        });

        describe('when logging in via submitting the input', () => {
          it('logs the user in', () => {
            const { getByText, getByPlaceholder } = render(<LoginScreen />);

            getByText(/You are not currently logged in/);
            fireEvent.changeText(getByPlaceholder('Username'), 'user');
            fireEvent(getByPlaceholder('Username'), 'submitEditing');

            getByText(/You are logged in as user/);
          });
        });
      });
    });
  });
});

