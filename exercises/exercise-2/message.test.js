import Message from './message';
import { render } from 'react-native-testing-library';
import React from 'react';
// To run tests in this file, run yarn test exercises/exercise-2 in your terminal.

describe('<Message />', () => {
  describe('1', () => {
    it('renders the text "Here\'s a message for you"', () => {
      const { getByText } = render(<Message />);

      getByText(/Here's a message for you/);
    });
  });

  describe('2', () => {
    it('renders the text "Here\'s a secret message for you: hello!"', () => {
      const { getByText } = render(<Message />);

      getByText(/Here's a secret message for you: hello!/);
    });
  });

  describe('3', () => {
    describe('when isASecret is true', () => {
      it('renders the text "Here\'s a secret message for you: hello!"', () => {
        const { getByText } = render(<Message isASecret={true}/>);

        getByText(/Here's a secret message for you: hello!/);
      });
    });

    describe('when isInMessage is false', () => {
      it('renders the text "Here\'s a message for you: hello!"', () => {
        const { getByText } = render(<Message isASecret={false}/>);

        getByText(/Here's a message for you: hello!/);
      });
    });
  });
});

