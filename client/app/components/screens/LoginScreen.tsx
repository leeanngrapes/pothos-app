import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  ImageBackground,
} from "react-native";

import colors from "../../config/colors";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import AppText from "../shared/AppText";

function LoginScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/pothos.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>POTHOS</Text>
        <SubHeading>Take good care.</SubHeading>
      </View>

      <View style={styles.container}>
        <Heading>Log In</Heading>
        <AppText>
          A login form will go here with fields for email/username and password.
        </AppText>
      </View>
      <View style={styles.loginButton}>
        <Text>Login</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 120,
  },
  heading: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontSize: 40,
    fontWeight: "800",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.accent,
    marginBottom: 50,
  },
});

export default LoginScreen;
