import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Link, withRouter } from 'react-router-native';

class LoginScreen extends React.Component {
  state = {
    username: '',
  }

  handleSubmit() {
    if (this.state.username.length > 3) {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => this.handleSubmit()}
          onChangeText={(text) => this.setState({ username: text })}
          placeholder="Username"
          value={this.state.username}
        />
        <Button 
          onPress={() => this.handleSubmit()}
          title="Login"
        />
        <Link to="/help"><Text>Help!</Text></Link>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default withRouter(LoginScreen);
