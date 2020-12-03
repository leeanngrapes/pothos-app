import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";

import colors from "../../config/colors";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import AppText from "../shared/AppText";

function CareScheduleScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Heading>Care Schedule</Heading>
      </View>
      <View style={styles.section}>
        <SubHeading>Next Care Due</SubHeading>
        <View style={styles.results}>
          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../../assets/fiddle-leaf-fig-plant.jpg")}
            />
            <AppText>Fiddler - </AppText>
            <AppText>Water</AppText>
          </View>
          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../../assets/jade-plant.jpg")}
            />
            <AppText>Jadey - </AppText>
            <AppText>Rotate</AppText>
          </View>

          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../../assets/philodendron-plant.jpg")}
            />
            <AppText>Dendron - </AppText>
            <AppText>Fertilize</AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  section: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  plantImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10,
    marginHorizontal: 20,
  },
  plantResult: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  results: {
    flex: 3,
  },
  title: {
    flex: 1,
    marginBottom: 10,
  },
});

export default CareScheduleScreen;
