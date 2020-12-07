import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppText from "./AppText";

function SillItem({ name, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.sillItem}>
        <Image style={styles.image} source={image} />
        <AppText style={styles.name}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  sillItem: {
    margin: 12,
    alignItems: "center",
    width: 100,
  },
  name: {
    padding: 10,
  },
});

export default SillItem;
