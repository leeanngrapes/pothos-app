import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../theme/colors";
import Heading from "../components/Heading";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import SubHeading from "../components/SubHeading";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../assets/pothos.jpg")}
      >
        <Heading style={styles.title}>POTHOS</Heading>
        <SubHeading style={styles.tagline}>Take good care</SubHeading>

        <View style={styles.buttonsContainer}>
          <AppButton
            title="log in"
            color="secondary"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <AppButton
            title="Register"
            color="accent"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    top: 250,
  },
  tagline: {
    fontWeight: "800",
    color: colors.warmWhite,
  },
  title: {
    color: colors.warmWhite,
    fontSize: 60,
    fontWeight: "800",
    marginBottom: 40,
    marginTop: 150,
  },
});

export default WelcomeScreen;
