import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AccountScreen from "./app/components/screens/AccountScreen";
import AddToSillScreen from "./app/components/screens/AddToSillScreen";
import LoginScreen from "./app/components/screens/LoginScreen";
import PlantInfo from "./app/components/screens/PlantInfo";
import PlantInfoScreen from "./app/components/screens/PlantInfoScreen";
import RegisterScreen from "./app/components/screens/RegisterScreen";
import SearchScreen from "./app/components/screens/SearchScreen";
import ViewPlantScreen from "./app/components/screens/ViewPlantScreen";
import WelcomeScreen from "./app/components/screens/WelcomeScreen";
import YourSill from "./app/components/screens/YourSill";

export default function App() {
  return <ViewPlantScreen />;
}
