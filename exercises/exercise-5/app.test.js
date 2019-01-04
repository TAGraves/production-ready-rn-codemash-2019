import App from './app';
import { render, fireEvent } from 'react-native-testing-library';
import { MemoryRouter } from 'react-router';
import React from 'react';
// To run tests in this file, run yarn test exercises/exercise-5 in your terminal.

describe('<App />', () => {
  function renderComponent(initialRoute) {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    );
  }

  describe('1', () => {
    describe('/home/:username', () => {
      it('displays the username', () => {
        const { getByText } = renderComponent('/home/user');

        getByText(/You are logged in as user/);
      });
    });

    describe('/', () => {
      describe('when the user is logged in', () => {
        it('displays the username', () => {
          const { getByText, getByPlaceholder } = renderComponent('/');

          getByText(/Login/);
          fireEvent.changeText(getByPlaceholder('Username'), 'user');
          fireEvent.press(getByText(/Login/));

          getByText(/You are logged in as user/);
        });
      });
    });
  });

  describe('2', () => {
    describe('/', () => {
      describe('when the user is logged in', () => {
        it('displays the username', () => {
          const { getByText, getByPlaceholder } = renderComponent('/');

          getByText(/Login/);
          fireEvent.changeText(getByPlaceholder('Username'), 'user');
          fireEvent.press(getByText(/Login/));

          getByText(/You are logged in as user/);
        });
      });
    });
  });

  describe('3', () => {
    describe('/', () => {
      describe('when the user is logged in', () => {
        it('navigates to the home screen', () => {
          const { getByText, getByPlaceholder } = renderComponent('/');

          getByText(/Login/);
          fireEvent.changeText(getByPlaceholder('Username'), 'user');
          fireEvent.press(getByText(/Login/));

          getByText(/You are logged in/);
        });
      });
    });
  });

  describe('4', () => {
    describe('/', () => {
      describe('when the user is logged in', () => {
        it('displays the username', () => {
          const { getByText, getByPlaceholder } = renderComponent('/');

          getByText(/Login/);
          fireEvent.changeText(getByPlaceholder('Username'), 'user');
          fireEvent.press(getByText(/Login/));

          getByText(/You are logged in as user/);
        });
      });
    });
  });
});

