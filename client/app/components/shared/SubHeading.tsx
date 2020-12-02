import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function SubHeading({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "tomato",
  },
});

export default SubHeading;
