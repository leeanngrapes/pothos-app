import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ImageBackground,
} from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/pothos.jpg")}
    >
      <Text style={styles.heading}>POTHOS</Text>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
    position: "absolute",
    top: 70,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#b4d455",
    marginBottom: 70,
  },
});

export default WelcomeScreen;
