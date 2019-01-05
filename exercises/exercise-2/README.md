# Exercise 2
## Introduction to React Components

This exercise will introduce you to React components. Components are at the heart of React and React Native; they're *the* key concept to understand.

Think of a component as a piece of user interface. Some components are *atomic*, or very small: buttons, inputs, basic blocks of text. Other components *compose* the small components to form partials, sections, or even entire screens. In React, every piece of user interface is a component that builds itself out of other components.

To create our components, we'll use JSX. JSX is a special syntax addition to JavaScript that allows you to declaratively define a user interface. If you've worked with HTML or XML, the syntax should be familiar!

### 1
Take a look at `box.js`. This module exports a component named `Box`. There are a few different ways to write components in React, but for these exercises we'll always use the *class* syntax. React class components have a few distinct pieces:
* They always inherit from `React.Component`
* They always have a `render()` method that returns the UI for the component determined by JSX.

Right now, our `Box` component just returns a `View`. The `View` component in React Native doesn't do anything on its own - it just wraps other things and optionally styles them. 

🚀 Let's see what our "box" looks like. Run the React Native application:
```bash
react-native run:ios
```
or
```bash
react-native run:android
```

You should just see the text "Exercise 2" in your emulator.

Let's spice up our box a little bit by adding some text. React Native gives us a `Text` component that we can put text in.

🚀 Add the text `I am in a box` to the box component. You should see the text when reloading the emulator. You can also verify your solution by running the test for step one of this exercise:
```bash
yarn test exercises/exercise-2 -t 1
```

💡 Annoyed at having to refresh the emulator to see updates? Turn on live reloading by opening the developer menu (`cmd + d` for XCode, `cmd/control + m` for Android Studio) and selecting `Enable Live Reload`.

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
