import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";

import colors from "../../config/colors";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import AppText from "../shared/AppText";
import AppButton from "../shared/AppButton";

function AccountScreen() {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/plant.jpg")}
    >
      <View style={styles.title}>
        <Heading>Your Account</Heading>
      </View>
      <View style={styles.content}>
        <SubHeading>Username</SubHeading>
        <AppText>username</AppText>
        <SubHeading>Email</SubHeading>
        <AppText>email@email.com</AppText>
        <SubHeading>Password</SubHeading>
        <AppText>**********</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Edit"
          onPress={() => Alert.alert("Edit button pressed")}
        />
        <AppButton
          title="Sign Out"
          color="accent"
          onPress={() => Alert.alert("Sign out button pressed")}
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
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  content: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    paddingLeft: "30%",
    height: "auto",
    marginBottom: 50,
    paddingTop: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    marginBottom: 20,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    marginBottom: 70,
  },
});

export default AccountScreen;
