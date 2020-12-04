import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import ViewPlantScreen from "../screens/ViewPlantScreen";
import YourSillScreen from "../screens/YourSillScreen";
import AddToSillScreen from "../screens/AddToSillScreen";
import PlantInfoScreen from "../screens/PlantInfoScreen";

const Stack = createStackNavigator();

const SillNavigator = () => (
  <Stack.Navigator mode={"modal"}>
    <Stack.Screen name="YourSill" component={YourSillScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen
      name="ViewPlant"
      component={ViewPlantScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="AddToSill"
      component={AddToSillScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="PlantInfo"
      component={PlantInfoScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default SillNavigator;
