import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import PlantInfo from "./app/components/screens/PlantInfo";
import WelcomeScreen from "./app/components/screens/WelcomeScreen";
import YourSill from "./app/components/screens/YourSill";

export default function App() {
  return <WelcomeScreen />;
}
