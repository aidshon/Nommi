import React from "react";
import { Alert, AsyncStorage, Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  email: string;
  password: string;
}

class LoginContainer extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: 'Login',
  };

  public state = {
    email: "",
    password: "",
  };

  public onLogIn = () => {
    const { email, password } = this.state;
    if (email === "Admin" && password === "12345") {
      AsyncStorage.setItem('isAuthenticated', email);
      this.props.navigation.navigate('Profile');
    }
    else {
      Alert.alert("Имя пользователя или пароль введены не верно");
    }
  };

  render() {
    const { container, textInput, text } = styles;
    return (
      <View style={container}>
        <Text style={text}>Enter your credentials to login:</Text>
        <TextInput
          placeholder='Email'
          style={textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email} />
        <TextInput
          placeholder='Password'
          style={textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password} />
        <Button
          title="Submit"
          onPress={() => this.onLogIn()}
        />
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
    marginTop: 10,
    paddingLeft: 5
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default LoginContainer;
