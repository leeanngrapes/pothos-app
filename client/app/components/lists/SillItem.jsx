import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppText from "../AppText";

function SillItem({ name, location, imageUri, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.sillItem}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.name}>
          <AppText>{name}</AppText>
          <AppText style={styles.location}>{location}</AppText>
        </View>
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
  location: {
    fontSize: 14,
  },
  sillItem: {
    margin: 12,
    alignItems: "center",
    width: 100,
  },
  name: {
    padding: 10,
    alignItems: "center",
  },
});

export default SillItem;
