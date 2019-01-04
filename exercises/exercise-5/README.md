# Exercise 5
## React Router Data-Flow and Architecture

These exercises will dive deeper into React Router with a focus on applying maintainable patterns for data flow.

💡 Make sure to update `current-exercise.js` in the root of this project to reflect the current exercise you're on. This file is used for determining what exercise to display in the emulator.

### 1
When navigating to a new scene, it's often necessary to pass some data into that scene to configure it based on the source scene. There are several ways to accomplish this with React Router. We'll dive into a few of them here.

We're starting off this exercise with the setup we should have ended exercise 4 with. Let's pass the entered username into the home-screen and display it there.

The first way we'll tackle for doing this is embedding the data directly into the routes. So far, our routes have just been static strings. But we can embed values into the routes too, and those values will be available for our scene to use. In React Router world, dynamic values in a route are indicated by a colon `:`. For example, the route path `/users/:userId` would let us pass a userId through the route:
```js
<Route path="/users/:userId" component={UsersScreen} />
```
If we navigated to `/users/1`, the above route would match and would render the `UsersScreen` while also dynamically passing in the value `1` for `userId`. That dynamic value is available via `this.props.match.params` - e.g., `this.props.match.params.userId` inside the `UsersScreen` would equal `1`.

🚀 Change the path for our home route to `/home/:username`, update `HomeScreen` to display "You are logged in as {username}.", and update `LoginScreen` to pass the username through the route when navigating to the home screen. Verify your solution works in the app and with
```bash
yarn test exercises/exercise-5 -t 1
```

### 2
Putting information in the routes is handy - especially in web, where it has the side effect of providing the end user with a URL that they can return to - but it can quickly get unwiedly with multiple pieces of information. Another way to pass information between routed scenes is using `history.location.state`. When pushing to a new route, you can pass data into the second parameter of `history.push`, and that data will be stored on the history object.

🚀 Undo the changes made in step 1, and implement the same functionality using history state instead. As a convenience for undoing the changes, the original files are available in this directory, named `---.original.js`. Verify your solution works in the app and with
```bash
yarn test exercises/exercise-5 -t 2
```

### 3
The above strategies can be very handy for configuring scenes that are being routed to. However, in large-scale apps, employing only the strategies we've learned so far can have some significant downsides. For example, as things stand right now, if the `HomeScreen` wanted to navigate to another screen that needed the username, it would have to explicitly pass the username to it, and that screen would have to pass it on to its fellow screens, and so on. This is manageable, but it opens up the surface area for a lot of bugs, like introducing a screen into the mix but forgetting that it needs to pass the data along too.

In React world, solving this problem has usually come in the form of adding a tool called `Redux`. Redux provides a way to keep track of your data outside of the component tree while still automatically updating your components when that data changes. Rather than using Redux in these exercises, however, we'll implement a different approach that doesn't introduce any third party dependencies.

Our approach here will focus on introducing components whose primary purpose is keeping track of and orchestrating data. The data we've been trying to keep track of is the logged in username. Let's introduce a component that's responsible for this data, and call it an `AuthController`. We'll place this component *above* the route controller.

🚀 Undo the changes made in step 2. Then, create a new component called `AuthController`. Have the `AuthController` render the `RouteController`. Update `app.js` to render the `AuthController` rather than the `RouteController`.

💡 At this point, the AuthController shouldn't do anything other than render the RouteController. Its presence should make no difference on the functionality of your application.

Our `AuthController` is going to manage the username of the logged in user. Here's what our strategy is going to be:
* `AuthController` will expose a method for `LoginScreen` to call to update the logged in user.
* `AuthController` will pass the logged in user into the `RouteController`, which will pass it into every screen.

🚀 We'll keep track of the username of the logged in user in `AuthController`'s state. Initialize state in the `AuthController` with `username: undefined` for now. Then, write a method in `AuthController` called `login(username)` that updates the username in state. Pass `login` to the `RouteController` as a prop. Also, pass `this.state.username` to the `RouteController` as a prop. Verify your application still behaves as before with:
```bash
yarn test exercises/exercise-5 -t 3
```

### 4
We'll need to modify the `RouteController` to use the props we're now passing it. Up to this point, our routes have looked like:
```js
<Route
  exact path="/some-path"
  component={SomeComponent}
/>
```
This has been an easy way to get started with routes. However, React Router lets us configure our routes more specifically by using the `render` prop instead of the `component` prop. The following is equivalent to the above:
```js
<Route
  exact path="/some-path"
  render={() => <SomeComponent />)}
/>
```
The `render` prop accepts a function that returns the JSX you want to render when that route is matched. This lets us configure the returned JSX in any way we want. For example, we can pass arbitrary props into `SomeComponent`:
```js
<Route
  exact path="/some-path"
  render={() => <SomeComponent someProp={11} />)}
/>
```

🚀 Update the `Route` for the `LoginScreen` to pass `this.props.login` into the `LoginScreen`. Then update the `LoginScreen` so that it calls `this.props.login` before navigating to the home screen.

Now that we're updating the username value in `AuthController`'s state, we can use it in the `HomeScreen`.

🚀 Update the `Route` for the `HomeScreen` to pass `this.props.username` into the `HomeScreen`. Then update the `HomeScreen` so that it says "You are logged in as {username}.". Verify your solution in the application and with the tests:
```bash
yarn test exercises/exercise-5 -t 4
```

Passing data around using a component above the route controller in this way opens up many interesting possibilities. As extra credit, consider trying the following approaches:

* Rather than passing each piece of data or method separately, pass them all in through a prop called `passProps`.
* Put an element on the page that stays across route transitions (like a header or footer)
* Update the `RouteController` to automatically pass its props into each one of its children.