import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import AppNavigator from "../navigation/AppNavigator";
import AccountNavigator from "../navigation/AccountNavigator";
import colors from "../theme/colors";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="App"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name="AccountNav"
      component={AccountNavigator}
      options={{ headerShown: false }}
    /> */}
  </Stack.Navigator>
);

export default AuthNavigator;
