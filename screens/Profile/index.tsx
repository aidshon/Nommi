import React from "react";
import { AsyncStorage, Button, Text, View, StyleSheet } from "react-native";

interface IState {
  email: string;
}

class ProfileContainer extends React.Component<IState> {
  static navigationOptions = {
    title: 'Profile',
    headerLeft: null
  };

  public state = {
    email: ''
  };

  public componentWillMount() {
    AsyncStorage.getItem("isAuthenticated").then(email => {
      this.setState({
        email
      })
    })
  };

  public onLogOut = () => {
    AsyncStorage.removeItem("isAuthenticated");
    this.props.navigation.navigate('Main');
  };

  render() {
    const { container, text } = styles;

    return (
      <View style={container}>
        <Text style={text}>
          Hello, {this.state.email}
        </Text>
        <Button title="Log out" onPress={this.onLogOut} />
        <Button title="Go to the main page" onPress={() => this.props.navigation.navigate('Main')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: 220,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 5
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ProfileContainer;