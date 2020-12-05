import React from "react";
import { StyleSheet, View } from "react";

import colors from "../theme/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medium,
  },
});

export default ListItemSeparator;