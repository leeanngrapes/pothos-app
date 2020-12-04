import { StatusBar } from "expo-status-bar";
import React from "react";

import AccountScreen from "./app/screens/AccountScreen";
import AddToSillScreen from "./app/screens/AddToSillScreen";
import CareScheduleScreen from "./app/screens/CareScheduleScreen";
import LoginScreen from "./app/screens/LoginScreen";
import PlantInfo from "./app/screens/PlantInfo";
import PlantInfoScreen from "./app/screens/PlantInfoScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import SearchScreen from "./app/screens/SearchScreen";
import ViewPlantScreen from "./app/screens/ViewPlantScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import YourSillScreen from "./app/screens/YourSillScreen";

export default function App() {
  return <WelcomeScreen />;
}
