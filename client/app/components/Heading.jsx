import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../theme/colors";

function Heading({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "600",
    color: colors.primary,
    top: 50,
    alignSelf: "center",
  },
});

export default Heading;
