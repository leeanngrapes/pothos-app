import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import ViewPlantScreen from "../screens/ViewPlantScreen";
import YourSillScreen from "../screens/YourSillScreen";
import PlantEditScreen from "../screens/PlantEditScreen";
import PlantInfoScreen from "../screens/PlantInfoScreen";
import colors from "../theme/colors";

const Stack = createStackNavigator();

const SillNavigator = () => (
  <Stack.Navigator mode={"modal"}>
    <Stack.Screen
      name="MySill"
      component={YourSillScreen}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
    <Stack.Screen
      name="ViewPlant"
      component={ViewPlantScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
    <Stack.Screen
      name="PlantEdit"
      component={PlantEditScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
    <Stack.Screen
      name="PlantInfo"
      component={PlantInfoScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
  </Stack.Navigator>
);

export default SillNavigator;
