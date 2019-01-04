# Exercise 4
## Routing with React Router

This exercise will introduce you to React Router and routing between screens.

💡 Make sure to update `current-exercise.js` in the root of this project to reflect the current exercise you're on. This file is used for determining what exercise to display in the emulator.

At its core, React Router provides two important things for your React Native application. One, it provides a way to map arbitrary strings (called *routes*) to one or more components to be rendered. Two, it keeps track of which route the application is currently on, as well as the history of routes, and it provides mechanisms for changing the active route.

Let's start with a simple example.

### 1
Here's the lay of the land. We've got three relevant components so far:
* `app.js` - this component is rendering a `<NativeRouter>` with the `<RouteController>` as its only child. The `<NativeRouter>` is a component from React Router. In a nutshell, it allows you to use other React Router components throughout your application.
* `route-controller.js` - this component renders a `<Route>`, which is just a component that knows how to map a route to another component. In this case, the `RouteController` is mapping `/` to `LoginScreen`.
* `login-screen.js` - this is a slightly modified version of the screen we used in Exercise 3.

By default, your application starts on the `/` route, so if you run the application you should see the login screen.

🚀 Add a new screen component called `HelpScreen` which displays the text "Need help?" In `RouteController`, update the `/` route so that it points to `HelpScreen` rather than `LoginScreen`. While running the app, you should now see your help screen. Run the tests to verify your solution:
```bash
yarn test exercises/exercise-4 -t 1
```

### 2
Of course, the real value here is being able to go from one route to another.

🚀 Change the `RouteController` back to render the `LoginScreen` at `/`. Then add another route with an exact path that renders `HelpScreen` at `/help`.

There are a couple of different ways to navigate from one route to another. The simplest is using React Router's `Link` component, which has a `to` prop specifying where to link to.

🚀 Add a `Link` to the bottom of the login screen with a `to` prop set to `/help`. Inside of the `Link`, render a `Text` component with the text "Help!" If you run your application, you should be able to click the link to navigate to the help page. Run the tests to verify your solution:
```bash
yarn test exercises/exercise-4 -t 2
```

### 3
It's pretty common to need to navigate programmatically, in response to a form submission, network request, etc. For those cases, React Router exposes a way to push new entries onto the history of routes directly. (You can also do things like replace the existing route, but we won't explore those options here.)

🚀 Let's update our login screen to take us to a screen called `HomeScreen` after successfully login. First, build a `HomeScreen` component that just displays the text "You are logged in." Add a route to the route controller mapping `/home` to `HomeScreen`.

In order to programmatically navigate, we need to get access to the `history` object. There are a few different ways to do this, but the simplest is using the `withRouter` function that React Router exposes. This function wraps a component and injects `history` as a prop into that component whenever it is rendered. Take the following component as an example:
```js
class SomeComponent extends React.Component {
  render() {
    return <Text>There are {this.props.history.length} items in the route history.</Text>;
  }
}

export default withRouter(SomeComponent);
```
By exporting `withRouter(SomeComponent)` rather than exporting the component directly, the `this.props.history` will *always* be available inside the component - even if it's just rendered with `<SomeComponent />`.

🚀 Wrap `LoginScreen` with `withRouter` and export the result. Then update the `handleSubmit` method in `LoginScreen` to call `this.props.history.push` and push the user to the home screen. Verify your solution with the tests:
```bash
yarn test exercises/exercise-4 -t 3
```

