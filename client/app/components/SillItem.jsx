import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppText from "./AppText";

function SillItem({ name, location, imageUri, onPress }) {
  //change to imageUri
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.sillItem}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.name}>{location}</AppText>
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
