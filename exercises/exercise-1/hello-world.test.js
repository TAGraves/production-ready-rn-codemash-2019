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
describe('testing with Jest', () => {
  it('works!', () => {
    expect(true).toBe(true);
  });
});

// ------ EXERCISES -------
describe('helloWorld', () => {
  // --- 1 ---
  // This test should pass. It calls the helloWorld function exported by the hello-world module with CodeMash
  // and asserts that it returns "Hello world, CodeMash!".
  // Uncomment this test and run it to see it pass.

  // describe('when the name is CodeMash', () => {
  //   it('says hello', () => {
  //     expect(helloWorld('CodeMash')).toBe('Hello world, CodeMash!');
  //   });
  // });

  // --- 2 ---
  // Write a test like the above, but use your own name instead of CodeMash.
  // Uncomment this test, complete the exercise on the previous line, and run the test.
  // describe('when the name is ______', () => {
  //   it('says hello', () => {
  //     // Write an assertion here like the above one.
  //   });
  // });

  // --- 3 ---
  // Jest provides great output when your tests fail. Write a test here just like the above tests,
  // then run it and watch it fail.
  // describe('when the name is bad', () => {
  //   it('says hello', () => {
  //     // Write an assertion here that causes the test to fail.
  //   });
  // });

  // --- 4 ---
  // Update the implementation in hello-world.js so that the above test starts passing.
});