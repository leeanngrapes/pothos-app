import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import SubHeading from "./SubHeading";

function PlantCard({ title, subTitle, imageUri }) {
  return (
    <View style={styles.plantCard}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.detailsContainer}>
        <SubHeading style={styles.title}>{title}</SubHeading>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: "center",
    padding: 15,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  plantCard: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    paddingBottom: 5,
  },
});

export default PlantCard;
