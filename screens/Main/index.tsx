import React from "react";
import { Alert, AsyncStorage, Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class MainContainer extends React.Component<IProps> {
  static navigationOptions = {
    title: 'Main',
  };

  public onShowLoginScreen = () => {
    const { navigate } = this.props.navigation;
    AsyncStorage.getItem("isAuthenticated").then(email => {
      if (email) {
        Alert.alert("You are already logged in.")
      }
      else {
        navigate('Login');
      }
    })
  };

  public onShowProfile = () => {
    const { navigate } = this.props.navigation;
    AsyncStorage.getItem("isAuthenticated").then(email => {
      if (email) {
        navigate('Profile');
      }
      else {
        navigate('Login');
      }
    })
  };

  render() {
    const { container, text } = styles;
    const { navigate } = this.props.navigation;

    return (
      <View style={container}>
        <Text style={text}>Welcome!</Text>
        <Button
          title="Login"
          onPress={() => this.onShowLoginScreen()}
        />
        <Button
          title="My profile"
          onPress={() => this.onShowProfile()}
        />
        <Button
          title="Show resources"
          onPress={() => { navigate('Resources'); }}
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
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
})

export default MainContainer;