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

function YourSill() {
  return (
    <Image
      style={styles.image}
      source={require("../../assets/plant.jpg")}
    ></Image>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default YourSill;
