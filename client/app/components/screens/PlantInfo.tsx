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

import colors from "../../config/colors";
import AppText from "../shared/AppText";

function PlantInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/plant.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 40,
    borderColor: colors.secondary,
    borderWidth: 10,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.accent,
    position: "absolute",
    top: 40,
    right: 40,
    borderRadius: 50,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default PlantInfo;
