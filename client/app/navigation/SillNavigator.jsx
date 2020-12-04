import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import ViewPlantScreen from "../screens/ViewPlantScreen";
import YourSillScreen from "../screens/YourSillScreen";
import AddToSillScreen from "../screens/AddToSillScreen";
import PlantInfoScreen from "../screens/PlantInfoScreen";

const Stack = createStackNavigator();

const SillNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="YourSill" component={YourSillScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ViewPlant" component={ViewPlantScreen} />
    <Stack.Screen name="AddToSill" component={AddToSillScreen} />
    <Stack.Screen name="PlantInfo" component={PlantInfoScreen} />
  </Stack.Navigator>
);

export default SillNavigator;
