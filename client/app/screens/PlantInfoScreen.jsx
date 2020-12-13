import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../theme/colors";
import AppText from "../components/AppText";
import PlantCard from "../components/PlantCard";

function PlantInfoScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.cardContainer}>
        <PlantCard
          title="Fiddle Leaf Fig"
          subTitle="Ficus lyrata"
          image={require("../assets/fiddle-leaf-fig-plant.jpg")} //pass in imageUri
        />
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="water-outline"
              size={30}
              color={colors.white}
            />
          </View>
          <Text style={styles.sectionHeader}>Watering needs</Text>
          <AppText>
            This is care information about watering needs. Your fiddle leaf fig
            will enjoy getting water regularly but be sure to not drown it.{" "}
          </AppText>
        </View>
        <View style={styles.section}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="weather-sunny"
              size={30}
              color={colors.white}
            />
          </View>
          <Text style={styles.sectionHeader}>Light needs</Text>
          <AppText>
            This is care information about light needs. It likes very nice shade
            but not too far away from a window.{" "}
          </AppText>
        </View>
        <View style={styles.section}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="leaf"
              size={25}
              color={colors.white}
            />
          </View>
          <Text style={styles.sectionHeader}>Fertilizer needs</Text>
          <AppText>
            This is care information about fertilizing needs. Give it a boost
            during active growing months but not during the winter.{" "}
          </AppText>
        </View>
        <View style={styles.section}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="content-cut"
              size={25}
              color={colors.white}
            />
          </View>
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
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1.5,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: 40,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    marginRight: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
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
});

export default PlantInfoScreen;
