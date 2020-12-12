import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import AddToSillScreen from "./app/screens/AddToSillScreen";
import CareScheduleScreen from "./app/screens/CareScheduleScreen";
import LoginScreen from "./app/screens/LoginScreen";
import PlantInfoScreen from "./app/screens/PlantInfoScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import SearchScreen from "./app/screens/SearchScreen";
import ViewPlantScreen from "./app/screens/ViewPlantScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import YourSillScreen from "./app/screens/YourSillScreen";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AccountNavigator from "./app/navigation/AccountNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="AddToSill" component={AddToSillScreen} />
    <Stack.Screen name="CareSchedule" component={CareScheduleScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="PlantInfo" component={PlantInfoScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ViewPlant" component={ViewPlantScreen} />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      screenOptions={{ headerShown: false }} //not working
    />
    <Stack.Screen name="YourSill" component={YourSillScreen} />
  </Stack.Navigator>
);
//TODO: below,
//display <AuthNavigator> if not logged in
//display <AppNavigator> if logged in

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
