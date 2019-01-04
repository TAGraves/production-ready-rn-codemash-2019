# Exercise 1
## Introduction to Testing with Jest

This exercise will introduce you to Jest, the test runner and framework that we'll be using in this workshop. We'll use Jest throughout the workshop to ensure that we've correctly completed the exercises.

We'll run Jest from the command line. 

🚨 The `solutions` directory contains possible solutions for the exercises. Use this to verify your own solutions, get yourself unstuck, or to catch up if you fall behind in the exercises.

### 1
🚀  To run your first Jest test, run the following from the project root. This tells us to run the *first* test (`-t 1`) in exercise-1.
```bash
yarn test exercises/exercise-1 -t 1
```

You should see some output like the following:
```
$ jest exercises/exercise-1 -t 1
 PASS  exercises/exercise-1/hello-world.test.js
  helloWorld
    1
      when the name is CodeMash
        ✓ says hello (3ms)
    2
      when the name is ____
        ○ skipped 1 test
    3
      when the name is bad
        ○ skipped 1 test

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 passed, 3 total
Snapshots:   0 total
Time:        0.617s, estimated 1s
```

🚨 Not seeing the above? Try to find a helpful neighbor, or raise your hand and ask for help!

### 2
Take a look at `hello-world.js`. This module exports a simple function that says hello to the world and to the name passed in, except for when the name is bad. Now look at the first test in `hello-world.test.js` and examine what the test that we ran in step 1 actually does.

🚀 Write a test that verifies that the `helloWorld` function works correctly when you pass your own name into `helloWorld`. To verify that your test is correct, run:
```bash
yarn test exercises/exercise-1 -t 2
```

### 3
Writing passing tests is great, but one of the great values of testing is being able to identify what's gone wrong when a test fails. Jest provides an especially great output for failing tests - and we'll see lots of failing tests in this workshop, to be sure! Let's write a test for our `helloWorld` function that fails.

🚀 Write a test for `helloWorld` that asserts that the name `bad` behaves just like any other name (i.e., when you pass `bad` into `helloWorld`, it outputs "Hello world, bad!"). Run the test for step 3 and watch it fail:
```bash
yarn test exercises/exercise-1 -t 3
```

You should see the following output:
```
  ● helloWorld › 3 › when the name is bad › says hello

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello world, bad!"
    Received: "Goodbye, world"

      47 |     describe('when the name is bad', () => {
      48 |       it('says hello', () => {
    > 49 |         expect(helloWorld('bad')).toBe('Hello world, bad!');
         |                                   ^
      50 |       });
      51 |     });
      52 |   });

      at Object.toBe (exercises/exercise-1/hello-world.test.js:49:35)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 skipped, 3 total
Snapshots:   0 total
Time:        1.21s, estimated 2s
```

Take note of a couple of details of the output: it points you to the line of the failing expectation, and it tells you what it received and what it expected to receive.

### 4
We shouldn't ignore failing tests! In this case, we're expecting the correct thing, but the `helloWorld` function is incorrect.

🚀 Change the function `helloWorld` so that it produces the correct output when `bad` is passed in. Verify the test you wrote for step 3 is passing by running it again with:
```bash
yarn test exercises/exercise-1 -t 3
```
