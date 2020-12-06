import React, { useState } from "react";
import { StyleSheet, SectionList } from "react-native";

import Heading from "../theme/Heading";
import SubHeading from "../theme/SubHeading";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialTasks = [
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
  const [tasks, setTasks] = useState(initialTasks);

  const handleDelete = (task) => {
    //delete the item from careschedulescreen, need state using a hook
    //call the server
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <Screen style={styles.background}>
      <Heading>Care Schedule</Heading>

      <SectionList
        contentContainerStyle={styles.container}
        sections={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            //not sure WHY this handleDelete is not working below :(
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => navigation.navigate("ViewPlant")}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SubHeading style={styles.sectionHeader}>{title}</SubHeading>
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
    marginTop: 50,
    marginHorizontal: 20,
  },
  sectionHeader: {
    alignSelf: "center",
  },
});

export default CareScheduleScreen;
