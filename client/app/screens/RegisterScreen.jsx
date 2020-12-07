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
import Heading from "../components/Heading";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function RegisterScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/pothos.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>POTHOS</Text>
        <Text style={styles.tagline}>Take good care.</Text>
      </View>
      <View></View>
      <View style={styles.buttonContainer}>
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
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  container: {
    //flex: 1,
    //justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.accent,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    //paddingVertical: 20,
  },
  title: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontSize: 40,
    fontWeight: "800",
  },
});

export default RegisterScreen;
