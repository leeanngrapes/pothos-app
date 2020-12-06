import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppText from "../theme/AppText";

function SillItem({ title, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.sillItem}>
        <Image style={styles.image} source={image} />
        <AppText style={styles.title}>{title}</AppText>
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
    margin: 10,
    alignItems: "center",
  },
  title: {
    padding: 10,
  },
});

export default SillItem;
