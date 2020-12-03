import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../../config/colors";

function Heading({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "600",
    color: colors.primary,
    top: 100,
  },
});

export default Heading;
