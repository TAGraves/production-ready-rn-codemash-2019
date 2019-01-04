# Exercise 3
## Behavior in React Components

This exercise will introduce you to events and state in React Native components.

💡 Make sure to update `current-exercise.js` in the root of this project to reflect the current exercise you're on. This file is used for determining what exercise to display in the emulator.

In React world, most of the functionality of an application comes in the form of responding to user-initiated events. Let's write our first event handler!

### 1
Take a look at `login-screen.js` to get the lay of the land. We've got a screen that renders three main components - a `Button`, a `TextInput`, and a `Text` displaying our current login status. Right now, nothing happens when you click the button. Let's change that.

In React, props that register event handlers almost always start with `on` as a matter of convention. The `Button` on our login screen has an `onPress` prop. The function passed to this prop will be called when the button is pressed.

🚀 Define a method called `handlePress` in the `LoginScreen` component class. Then use React Native's alert utility to have this method display an alert:
```js
Alert.alert('Your message here!');
```
Update the `onPress` arrow function to call `this.handleSubmit`. Then reload the app - you should see your message opened in a system dialog. Run the tests to verify your solution:
```bash
yarn test exercises/exercise-3 -t 1
```

### 2
If we want to persist some data - like whether the user is logged in or not - we can use *state*. State is effectively a bucket of data that, when it changes, should cause your component to update. You can define your component's state when it initializes by declaring `state` as a property in your component:
```js
class SomeComponent extends React.Component {
  state = {
    somePieceOfState: 5,
  };

  render() {...}
}
```

Just like props, you can reference state inside of the render method in order to configure the behavior of your component:

```js
render() {
  if (this.state.somePieceOfState === 5) {
    return <Text>It's five!</Text>
  } else {
    return <Text>Not five!</Text>
  }
}
```

To update state, every React component class gets a special `setState` method:
```js
handleSomeEvent() {
  this.setState({
    somePieceOfState: 10,
  });
}
```

🚀 Initialize state in the login component with `isLoggedIn` set to false. Then, update your button event handler so that, rather than alerting a message, it updates the state to reflect that the user is now logged in. Finally, update the `loginStatus` text to say "You are logged in" when `isLoggedIn` is true. Verify your component properly updates correctly in the app when the button is pressed, and run the tests:
```
yarn test exercises/exercise-3 -t 2
```

### 3
Let's further reinforce event handling by incorporating the text input. In order to utilize the input, we'll need to make its value be controlled by state. Add a property called `username` to state, and set the `value` prop on the input to be equal to the username.

After following the above steps, you might notice that you can't update the input anymore. That's because, regardless of what you type into it, its value is equal to `this.state.username`, which can only change by calling `this.setState`. In order words, the state's value doesn't automatically update to reflect what's typed into the input. We'll have to manually update the value of state by handling the `onChangeText` event on the input. This event includes a parameter, `text` which represents the text the user typed in.

🚀 Update the login screen component so that:
  * You can only log in when the username is at least 4 characters long.
  * After logging in, the login status text says "You are logged in as {username}".
  * Pressing submit on the on-screen keyboard logs you in (as well as pressing the button).
  Verify your changes with the tests:
  ```
  yarn test exercises/exercise-3 -t 3
  ```
