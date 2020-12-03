import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AccountScreen from "./app/components/screens/AccountScreen";
import LoginScreen from "./app/components/screens/LoginScreen";
import PlantInfo from "./app/components/screens/PlantInfo";
import RegisterScreen from "./app/components/screens/RegisterScreen";
import WelcomeScreen from "./app/components/screens/WelcomeScreen";
import YourSill from "./app/components/screens/YourSill";

export default function App() {
  return <AccountScreen />;
}
