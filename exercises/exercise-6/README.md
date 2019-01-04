# Exercise 6
## Animations

These exercises will explore animations in React Native. We'll focus on two different tools for animations: Animated Components and `LayoutAnimation`.

💡 Make sure to update `current-exercise.js` in the root of this project to reflect the current exercise you're on. This file is used for determining what exercise to display in the emulator.

### 1
We'll start out with `LayoutAnimation`, which is often extremely simple to implement. This exercise's directory contains a component called `Playground`, with a couple of different pieces of UI in it. Those will be the building blocks we use for animation.

Without making any changes, open the application and click the button. You'll notice the position of the square and triangle are swapped. Now let's animate it so they move to their new locations rather than immediately appearing there.

`LayoutAnimation` makes achieving this quite easy. With `LayoutAnimation`, you simply specify some configuration for your animation ahead of making a state update, and then React Native will automatically figure out how to perform the animation for you. It's simple!

🚀 At the top of `handlePress` in the `Playground`, configure a layout animation:

```js
LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
```

That's all there is to it! React Native will look at the respective element positions before your state update and after the state update, and it'll animate them for you.

We just used a preset to define the animation, but it's also possible to gain more fine grained control by configuring it yourself.

🚀 Rather than passing in the linear preset, pass in an object with a `duration` property set to `500` and the following `update` property:
```js
update: {
  type: LayoutAnimation.Types.linear,
}
```

`duration` represents the amount of time the animation will take. `update` represents that we should animate when a component updates (in a second, we'll look at the other options for animating - when a component is created or destroyed). Play around with the duration, or try other types like `easeInOut` and see their effects.

### 2

We can also use LayoutAnimations for handling the animation of new or destroyed elements.

🚀 Update `Playground` so that the square in the bottom left only renders when the state is swapped. One way to do that is by including an expression that evaluates to false when the state is not swapped:
```js
{this.state.swapped && (
  <View style={[styles.square, styles.bottomLeft]} />
)}
 ```

🚀 Now update the `LayoutAnimation` configuration to include a `create` property in addition to `update`. `create` takes `type` just like `update` does, but it also takes a CSS style property called `property` for determining what to do. Here's an example configuration:
```js
LayoutAnimation.configureNext({
  duration: 500,
  update: {
    type: LayoutAnimation.Types.linear,
  },
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
});
```

The above will cause the square to fade in when it's created. You can also add a `delete` property to the configuration which behaves just like `create`. Try adding that and using a different property, like `LayoutAnimation.Properties.scaleX`
### 3

`LayoutAnimation` is great for getting up and running with animations, but it doesn't offer the fine-grained control that you might want for more complex animations. For those, React Native provides an entirely different paradigm for animations - the `Animated` module.

🚀 Only animated components can be animated with the `Animated` module. Remove the layout animation configuration from `handlePress` and replace the top right triangle `<View>` with `<Animated.View>`.

Animated components are animated by including Animated values in their styling. Initialize an animated value at the top of the playground component:
```
  triangleYPosition = new Animated.Value(100)
```

🚀 This represents a value that can be animated which starts at 100. Now let's add an inline style to our triangle using our animated value:

```
  <Animated.View style={[styles.triangle, styles.topRight, {
    top: this.triangleYPosition,
  }]} />
```

If all has gone well, you should see the top right triangle slightly below its original position.

How do we animate it? There are a few different ways, but perhaps the easiest is using `Animated.timing` in our event handler. Create a new animation in `handlePress` as follows:
```
Animated.timing(
  this.triangleYPosition,
  {
    toValue: 200,
    duration: 1000,
  }
).start()
```

This defines an animation which animates the `triangleYPosition` value to `200` over the course of 1 second, and then starts the animation.

As you can see, the `Animated` module does not hold your hand nearly as much as `LayoutAnimation` - for instance, the animation we defined above plays only once and then has no effect (since the value is already at 200).

Extra credit: Using `LayoutAnimation`, return to exercise 5 and implement an animation for transition between scenes.

More extra credit: Follow https://facebook.github.io/react-native/docs/animations for creating a parallel or interpolated animation.
