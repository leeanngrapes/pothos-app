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

import colors from "../theme/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/pothos.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>POTHOS</Text>
        <Text style={styles.tagline}>Take good care</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="log in"
          color="secondary"
          onPress={() => Alert.alert("Login button pressed")}
        />
        <AppButton
          title="Register"
          color="accent"
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
    top: 250,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 50,
  },

  tagline: {
    fontSize: 25,
    fontWeight: "800",
    color: colors.warmWhite,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    paddingVertical: 10,
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.warmWhite,
    fontSize: 60,
    fontWeight: "800",
  },
});

export default WelcomeScreen;
