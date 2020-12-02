import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ImageBackground,
  Image,
} from "react-native";

import AppText from "../shared/AppText";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";

function YourSill() {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/plant.jpg")}
    >
      <View style={styles.container}>
        <Heading>Welcome to Your Sill</Heading>
        <SubHeading>Where you can tend your plants.</SubHeading>
        <AppText>I love plant!</AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default YourSill;
