import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";
import colors from "../../theme/colors";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    marginTop: -5,
    marginBottom: 10,
  },
});

export default ErrorMessage;
