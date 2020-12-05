import React from "react";
import { StyleSheet, View, Image, SafeAreaView, Text } from "react-native";

import colors from "../theme/colors";
import Heading from "../theme/Heading";
import SubHeading from "../theme/SubHeading";
import AppText from "../theme/AppText";
import ListItem from "../components/ListItem";

function CareScheduleScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Heading>Care Schedule</Heading>
      </View>
      <View style={styles.section}>
        <SubHeading>Overdue!</SubHeading>
        <View style={styles.results}>
          <ListItem
            image={require("../assets/fiddle-leaf-fig-plant.jpg")}
            title="Fiddler"
            subTitle="Water"
          />
        </View>
      </View>
      <View style={styles.section}>
        <SubHeading>Due Today</SubHeading>
        <View style={styles.results}>
          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../assets/jade-plant.jpg")}
            />
            <View style={styles.content}>
              <AppText>Jady </AppText>
              <Text style={styles.text}>Water</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <SubHeading>Due Tomorrow</SubHeading>
        <View style={styles.results}>
          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../assets/philodendron-plant.jpg")}
            />
            <View style={styles.content}>
              <AppText>Dendron </AppText>
              <Text style={styles.text}>Rotate</Text>
            </View>
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
  content: {
    flexDirection: "column",
  },
  section: {
    flex: 2,
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
    //flex: 3,
    marginLeft: -150,
    paddingBottom: -20,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.primary,
  },
  title: {
    flex: 1,
  },
});

export default CareScheduleScreen;
