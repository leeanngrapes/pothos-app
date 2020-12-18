import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../theme/colors";

function SubHeading({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.accent,
  },
});

export default SubHeading;
