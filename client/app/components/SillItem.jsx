import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "../theme/AppText";

function SillItem({ title, image }) {
  return (
    <View style={styles.sillItem}>
      <Image style={styles.image} source={image} />
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  sillItem: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    padding: 10,
  },
});

export default SillItem;
