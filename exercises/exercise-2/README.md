# Exercise 2
## Introduction to React Components

This exercise will introduce you to React components. Components are at the heart of React and React Native; they're *the* key concept to understand.

Think of a component as a piece of user interface. Some components are *atomic*, or very small: buttons, inputs, basic blocks of text. Other components *compose* the small components to form partials, sections, or even entire screens. In React, every piece of user interface is a component that builds itself out of other components.

To create our components, we'll use JSX. JSX is a special syntax addition to JavaScript that allows you to declaratively define a user interface. If you've worked with HTML or XML, the syntax should be familiar!

### 1
Take a look at `message.js`. This module exports a component named `Message`. There are a few different ways to write components in React, but for these exercises we'll always use the *class* syntax. React class components have a few distinct pieces:
* They always inherit from `React.Component`
* They always have a `render()` method that returns the UI for the component determined by JSX.

Right now, our `Message` component just returns a `View`. The `View` component in React Native doesn't do anything on its own - it just wraps other things and optionally styles them. 

🚀 Let's see what our "message" looks like. Run the React Native application:
```bash
react-native run-ios
```
or
```bash
react-native run-android
```

🚨 If you get the error `com.android.builder.testing.api.DeviceException: No connected devices!`, you need to open an emulator in Android Studio. Open Android Studio, then select `Tools -> AVD Manager` from the menu. Select the emulator you want to start and hit the play button.

You should just see the text "Exercise 2" in your emulator.

Presumably our `Message` component should display some text. React Native gives us a `Text` component that we can put text in.

🚀 Add the text `Here's a message for you` to the message component. You should see the text when reloading the emulator. You can also verify your solution by running the test for step one of this exercise:
```bash
yarn test exercises/exercise-2 -t 1
```

💡 Annoyed at having to refresh the emulator to see updates? Turn on live reloading by opening the developer menu (`cmd + d` for XCode, `cmd/control + m` for Android Studio) and selecting `Enable Live Reload`.

### 2
In many cases, you'll want to render content that is dynamic or driven via a variable. JSX makes this easy! You can interpolate the result of any JavaScript expression into your rendered component using the curly brace syntax. For example, to include the value of a variable in your component, your render method could look like:

```js
render() {
  const message = 'hello!';

  return (
    <View>
      <Text>Here's a message for you: ${message}</Text>
    </View>
  );
}
```

The above will display the text "Here's a message for you: hello!" (Give it a try!)

We're not limited to just including the values of variables - as mentioned, *any* JavaScript expression is valid. For instance, you could use a ternary expression:

```js
render() {
  const message = 'hello!';
  const isAwesome = true;
  return (
    <View>
      <Text>The message {message} is {isAwesome ? 'awesome' : 'not awesome'}.</Text>
    </View>
  );
}
```

🚀 Declare a variable called `isASecret` at the top of the render method and set it to true. Then make it so your component renders "Here's a secret message for you: hello!" when isASecret is true, and "Here's a message for you: hello!" when it is false. Check out the result in your emulator and verify it by running the test:
```bash
yarn test exercises/exercise-2 -t 2
```

### 3
Of course, just defining a variable inside of a method is not very useful. What is useful, however, is your component being able to differ depending on parameters that are passed into it. These parameters are called *props*, and they allow components to become configurable!

Within a component's render method, you access props by using `this.props`. For example, if you had a prop called `headline` that you wanted to render as text, you could do:
```js
<Text>Check this out: {this.props.headline}</Text>
```

🚀 Let's update our `Message` component to accept `isASecret` as a prop rather than defining `isASecret` at the top of the render method. Verify the code works by running the test:
```bash
yarn test exercises/exercise-2 -t 3
```

If you want to see your changes reflected in the emulator, you'll need to pass the `isASecret` prop to the `Message` component. Open `app.js` and replace
```js
<Message />
```
with
```js
<Message isASecret={false} />
```

Now when the application runs, it'll set `this.props.isASecret` to `false` inside your `Message` component.

### 4
Let's spice up our Message component by adding some styles. React Native uses a variant of CSS for styling. It provides a utility called `StyleSheet` to create styles for React components.

🚀 Add some color and a border to the `Message` component. Create a stylesheet at the bottom of the `message.js` file:

```js
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  message: {
    color: 'green',
  },
});
```

Most components that are imported from React Native (like `View` or `Text`) accept a `style` prop. If you wanted to assign your `container` styles to a View, you'd do:
```js
<View style={styles.container}>
```

🚀 Assign your container styles to the `View` in `Message` and assign the message styles to the `Text`. When you refresh the app, you should see that your text is green and your view now has a border.

Take some time to play around with different styling properties. You can view the available View style properties at https://facebook.github.io/react-native/docs/view-style-props, and the text ones at https://facebook.github.io/react-native/docs/text-style-props