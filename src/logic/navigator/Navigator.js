import React from "react";
import { createStackNavigator } from "react-navigation";
import { YellowBox, View, Button, Text } from "react-native";
import { Home } from "../../sections/Home/index";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const navigationOptions = {
  headerTintColor: "#c6cdd7",
  headerTitleStyle: { color: "#f4f4f4" },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0
  }
};

const rightButton = {
  container: {
    paddingRight: 16,
    paddingBottom: 2
  },
  text: {
    color: "#c5ccd6",
    fontSize: 21,
    fontWeight: "bold"
  }
};

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
  },
  {
    initialRouteName: "Home"
  }
);

class Root extends React.PureComponent {
  render() {
    return (
        <RootStack />
    );
  }
}
export default Root;