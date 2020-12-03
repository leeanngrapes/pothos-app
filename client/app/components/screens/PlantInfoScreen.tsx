import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ImageBackground,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";

import colors from "../../config/colors";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import AppText from "../shared/AppText";

function PlantInfoScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Image
          style={styles.plantImg}
          source={require("../../assets/fiddle-leaf-fig-plant.jpg")}
        />
        <SubHeading>Fiddle Leaf Fig</SubHeading>
        <AppText>Ficus lyrata</AppText>
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.icon} />
          <Text style={styles.sectionHeader}>Watering needs</Text>
          <AppText>
            This is care information about watering needs. Your fiddle leaf fig
            will enjoy getting water regularly but be sure to not drown it.{" "}
          </AppText>
        </View>
        <View style={styles.section}>
          <View style={styles.icon} />
          <Text style={styles.sectionHeader}>Light needs</Text>
          <AppText>
            This is care information about light needs. It likes very nice shade
            but not too far away from a window.{" "}
          </AppText>
        </View>
        <View style={styles.section}>
          <View style={styles.icon} />
          <Text style={styles.sectionHeader}>Fertilizer needs</Text>
          <AppText>
            This is care information about fertilizing needs. Give it a boost
            during active growing months but not during the winter.{" "}
          </AppText>
        </View>
        <View style={styles.section}>
          <View style={styles.icon} />
          <Text style={styles.sectionHeader}>Pruning needs</Text>
          <AppText>
            This is care information about pruning needs. Does not require
            regular pruning.{" "}
          </AppText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1.5,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    marginRight: 10,
    marginVertical: 10,
  },
  plantImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    margin: 10,
  },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    marginVertical: 50,
  },
  sectionHeader: {
    fontSize: 20,
    alignSelf: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 50,
  },
});

export default PlantInfoScreen;
