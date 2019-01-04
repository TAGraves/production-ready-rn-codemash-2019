import RouteController from './route-controller';
import { render, fireEvent } from 'react-native-testing-library';
import { MemoryRouter } from 'react-router';
import React from 'react';
// To run tests in this file, run yarn test exercises/exercise-4 in your terminal.

describe('<RouteController />', () => {
  function renderComponent(initialRoute) {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <RouteController />
      </MemoryRouter>
    );
  }

  describe('1', () => {
    it('renders the help screen', () => {
      const { getByText } = renderComponent('/');

      getByText(/Need help?/);
    });
  });

  describe('2', () => {
    describe('/', () => {
      it('renders the login screen', () => {
        const { getByText } = renderComponent('/');

        getByText(/Login/);
      });

      describe('when Help! is pressed', () => {
        it('navigates to the help screen', () => {
          const { getByText } = renderComponent('/');

          fireEvent.press(getByText('Help!'));

          getByText(/Need help?/);
        });
      });
    });

    describe('/help', () => {
      it('renders the help screen', () => {
        const { getByText } = renderComponent('/help');

        getByText(/Need help?/);
      });
    });
  });

  describe('3', () => {
    describe('/home', () => {
      it('renders the home screen', () => {
        const { getByText } = renderComponent('/home');

        getByText(/You are logged in/);
      });
    });

    describe('/', () => {
      describe('when the user is logged in', () => {
        it('navigate to the home screen', () => {
          const { getByText, getByPlaceholder } = renderComponent('/');

          getByText(/Login/);
          fireEvent.changeText(getByPlaceholder('Username'), 'user');
          fireEvent.press(getByText(/Login/));

          getByText(/You are logged in/);
        });
      });
    });
  });
});

