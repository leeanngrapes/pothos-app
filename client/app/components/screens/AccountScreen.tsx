import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  ImageBackground,
  SafeAreaView,
} from "react-native";

import colors from "../../config/colors";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import AppText from "../shared/AppText";

function AccountScreen() {
  return (
    <SafeAreaView style={styles.background}>
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
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 120,
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
