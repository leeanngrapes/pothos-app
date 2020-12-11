import React, { useState } from "react";
import { StyleSheet, SectionList } from "react-native";

import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Screen from "../components/Screen";
import { ListItem, ListItemDeleteAction } from "../components/lists";

const initialTasks = [
  {
    title: "Overdue!",
    data: [
      {
        id: 1,
        title: "Pothy",
        subTitle: "Water",
        image: require("../assets/pothos-plant.jpg"),
      },
      {
        id: 2,
        title: "Mrs. Jade",
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
        title: "Fiddler",
        subTitle: "Rotate",
        image: require("../assets/fiddle-leaf-fig-plant.jpg"),
      },
    ],
  },
  {
    title: "Due tomorrow",
    data: [
      {
        id: 4,
        title: "Pearly",
        subTitle: "Prune",
        image: require("../assets/string-of-pearls-plant.jpg"),
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

  const handleDelete = (item) => {
    //delete the item from careschedulescreen, need state using a hook
    //call the server
    setTasks(tasks.filter((t) => t.id !== item.id));
  };

  return (
    <Screen style={styles.background}>
      <Heading>Care Schedule</Heading>

      <SectionList
        contentContainerStyle={styles.container}
        sections={initialTasks} //differs from flatlist
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            //not sure WHY this handleDelete is not working below, works on FlatList, maybe could change later
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
