import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
  Alert,
} from "react-native";

import colors from "../../config/colors";
import AppButton from "../shared/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../../assets/pothos.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>POTHOS</Text>
        <Text style={styles.tagline}>Take good care</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="log in"
          onPress={() => Alert.alert("Login button pressed")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => Alert.alert("Register button pressed")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.accent,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: 20,
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontSize: 40,
    fontWeight: "800",
  },
});

export default WelcomeScreen;
