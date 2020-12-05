import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import CareScheduleScreen from "../screens/CareScheduleScreen";
import YourSillScreen from "../screens/YourSillScreen";

import colors from "../theme/colors";
import SillNavigator from "./SillNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.accent,
      inactiveBackgroundColor: colors.primary,
      inactiveTintColor: colors.white,
      style: { height: 90, alignContent: "center" },
      labelStyle: { fontSize: 14, marginBottom: 10 },
    }}
  >
    <Tab.Screen
      name="Sill"
      component={SillNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="window-closed-variant"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Care"
      component={CareScheduleScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="bell-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
