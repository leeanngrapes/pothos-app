import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../theme/colors";
import SubHeading from "../theme/SubHeading";
import AppText from "../theme/AppText";

function PlantCard({ title, subTitle, image }) {
  return (
    <View style={styles.plantCard}>
      <Image style={styles.image} source={image} />
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
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    paddingBottom: 8,
  },
});

export default PlantCard;
