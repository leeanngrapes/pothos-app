import React from "react";
import { StyleSheet, SafeAreaView, SectionList } from "react-native";

import Heading from "../theme/Heading";
import SubHeading from "../theme/SubHeading";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const DATA = [
  {
    title: "Overdue!",
    data: [
      {
        id: 1,
        title: "T1 Pothos",
        subTitle: "Water",
        image: require("../assets/pothos-plant.jpg"),
      },
      {
        id: 2,
        title: "T2 Jade",
        subTitle: "Fertilize",
        image: require("../assets/jade-plant.jpg"),
      },
    ],
  },
  {
    title: "Due today",
    data: [
      {
        id: 3,
        title: "T3 Pothos",
        subTitle: "Rotate",
        image: require("../assets/pothos-plant.jpg"),
      },
    ],
  },
  {
    title: "Due tomorrow",
    data: [
      {
        id: 4,
        title: "T4 Jade",
        subTitle: "Prune",
        image: require("../assets/jade-plant.jpg"),
      },
      {
        id: 5,
        title: "T5 Jade",
        subTitle: "Prune",
        image: require("../assets/jade-plant.jpg"),
      },
    ],
  },
];

function CareScheduleScreen({ navigation }) {
  return (
    <Screen style={styles.background}>
      <Heading>Care Schedule</Heading>

      <SectionList
        contentContainerStyle={styles.container}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate("ViewPlant")}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SubHeading>{title}</SubHeading>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
  },
  container: {
    alignItems: "center",
    marginTop: 50,
  },
});

export default CareScheduleScreen;
