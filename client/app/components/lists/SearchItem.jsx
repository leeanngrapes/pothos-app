//import { response } from "express";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";
//import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../theme/colors";
import AppText from "../AppText";

function SearchItem({
  commonName,
  scientificName,
  imageUri,
  navigation,
  onPress,
}) {
  return (
    <TouchableHighlight underlayColor={colors.warmWhite} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{commonName}</AppText>
          <AppText style={styles.subTitle}>{scientificName}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default SearchItem;
