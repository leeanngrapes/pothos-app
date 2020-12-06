import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../theme/colors";

function SubHeading({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.accent,
    //marginVertical: 10,
  },
});

export default SubHeading;
