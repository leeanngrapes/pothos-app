import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
//import AuthNavigator from "../navigation/AuthNavigator";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#F2EBEC",
        },
      }}
    />
    {/* <Stack.Screen
      name="AuthNavigator"
      component={AuthNavigator}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
