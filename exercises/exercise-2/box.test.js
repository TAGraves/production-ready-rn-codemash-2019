import { Box, BrownBox } from './box';
import { render } from 'react-native-testing-library';
import format from 'react-native-testing-library/build/helpers/format'
import React from 'react';
// To run tests in this file, run yarn test exercises/exercise-2 in your terminal.

describe('<Box />', () => {
  describe('1', () => {
    it('renders the text "I am in a box"', () => {
      const { getByText } = render(<Box />);

      getByText(/I am in a box/);
    });
  });
});

