import helloWorld from './hello-world';

// Run yarn test exercises/exercise-1 in your terminal. You should see see some output like:
// $ jest exercises/exercise-1
//  PASS  exercises/exercise-1/hello-world.test.js
//  testing with Jest
//    ✓ works! (5ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.139s
// Ran all test suites matching /exercises\/exercise-1/i.

// If you see the above, then your test environment is correctly set up.

// ------ EXERCISES -------
describe('helloWorld', () => {
  // --- 1 ---
  // This test should pass without making any changes. It calls the helloWorld function exported by the hello-world module with CodeMash
  // and asserts that it returns "Hello world, CodeMash!".
  // Run yarn test exercises/exercise-1 -t 1 in your terminal. You should see see some output like:

  describe('1', () => {
    describe('when the name is CodeMash', () => {
      it('says hello', () => {
        expect(helloWorld('CodeMash')).toBe('Hello world, CodeMash!');
      });
    });
  });

  // --- 2 ---
  // Write a test like the above, but use your own name instead of CodeMash.
  describe('2', () => {
    describe('when the name is ____', () => {
      it('says hello', () => {
        // Replace this line with your own expectation:
        expect(false).toBe(true);
      });
    });
  });

  // --- 3 ---
  // Jest provides great output when your tests fail. Write a test here just like the above tests,
  // then run it and watch it fail.
  describe('3', () => {
    describe('when the name is bad', () => {
      it('says hello', () => {
        // Replace this line with an expectation that causes the test to fail:
        expect(true).toBe(true);
      });
    });
  });

  // --- 4 ---
  // Update the implementation in hello-world.js so that the above test starts passing.
});