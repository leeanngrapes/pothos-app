import React from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../theme/colors";
import Heading from "../components/Heading";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import SubHeading from "../components/SubHeading";

function AccountScreen({ navigation }) {
  return (
    <Screen>
      <ImageBackground
        style={styles.image}
        source={require("../assets/plant.jpg")}
      >
        <View style={styles.title}>
          <Heading>Your Account</Heading>
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <SubHeading>Name</SubHeading>
            <AppText>LeeAnn Grapes</AppText>
          </View>
          <View style={styles.section}>
            <SubHeading>Email</SubHeading>
            <AppText>leeann.grapes@gmail.com</AppText>
          </View>
          <View style={styles.section}>
            <SubHeading>Password</SubHeading>
            <AppText>*******</AppText>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            title="Edit"
            color="secondary"
            onPress={() =>
              Alert.alert("Edit account functionality coming soon!")
            }
          />

          <AppButton
            title="Sign Out"
            color="accent"
            onPress={() => navigation.navigate(routes.WELCOME)}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    alignItems: "center",
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
    marginVertical: 130,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  section: {
    marginVertical: 5,
  },
  title: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default AccountScreen;
