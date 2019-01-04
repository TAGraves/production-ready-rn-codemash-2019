// in playground.js:
handlePress() {
  LayoutAnimation.configureNext({
    duration: 500,
    update: {
      ype: LayoutAnimation.Types.linear,
    }
  });

  this.setState({
    swapped: !this.state.swapped,
  });
}