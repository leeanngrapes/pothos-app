import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../theme/colors";
import AppText from "../components/AppText";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";

function PlantInfoScreen({ route, navigation }) {
  const { title } = route.params;
  const { subTitle } = route.params;
  const { imageUri } = route.params;
  const { lightInfo } = route.params;
  const { waterInfo } = route.params;
  const { fertilizerInfo } = route.params;
  const { pruningInfo } = route.params;

  return (
    <ScrollView>
      <Screen>
        <View style={styles.cardContainer}>
          <PlantCard title={title} subTitle={subTitle} imageUri={imageUri} />
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
            <AppText style={styles.info}>{waterInfo} </AppText>
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
            <AppText style={styles.info}>{lightInfo} </AppText>
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
            <AppText style={styles.info}>{fertilizerInfo} </AppText>
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
            <AppText style={styles.info}>{pruningInfo} </AppText>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    width: "100%",
    paddingLeft: 60,
  },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
  },
  sectionHeader: {
    fontSize: 20,
    alignSelf: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default PlantInfoScreen;
