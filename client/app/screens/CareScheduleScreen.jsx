import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import AppText from "../components/AppText";
import Heading from "../components/Heading";
import { ListItem, ListItemDeleteAction } from "../components/lists";
import Screen from "../components/Screen";
import SubHeading from "../components/SubHeading";

// TODO in V2: populate this list with sill items; refresh list at 12:00am Monday local time

const initialTasks = [
  {
    id: 1,
    title: "Philly",
    subTitle: "Office",
    image: "https://live.staticflickr.com/65535/50728231743_95ff236163_k.jpg",
  },
  {
    id: 2,
    title: "Arnie",
    subTitle: "Entryway",
    image: "https://live.staticflickr.com/65535/50729055742_334686ff54_k.jpg",
  },
  {
    id: 3,
    title: "Navidad",
    subTitle: "Hallway",
    image: "https://live.staticflickr.com/65535/50729055777_4bea3ece02_k.jpg",
  },
  {
    id: 4,
    title: "Lars",
    subTitle: "Kitchen",
    image: "https://live.staticflickr.com/65535/50728231703_3c2dc6270e_k.jpg",
  },
  {
    id: 5,
    title: "Groover",
    subTitle: "Living room",
    image: "https://live.staticflickr.com/65535/50728231843_192c2d67b4_k.jpg",
  },
  {
    id: 6,
    title: "Lips",
    subTitle: "Office",
    image: "https://live.staticflickr.com/65535/50728960791_29ef8c2d26_k.jpg",
  },
  {
    id: 7,
    title: "Arrayzing",
    subTitle: "Office",
    image: "https://live.staticflickr.com/65535/50729055562_fb18a9a48e_k.jpg",
  },
];

function CareScheduleScreen() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDelete = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <Screen>
      <Heading>Care Tracker</Heading>
      <SubHeading style={styles.subHeading}>
        Week of December 14, 2020
      </SubHeading>

      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
      <AppText style={styles.footer}>That's all for this week!</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  footer: {
    alignSelf: "center",
    marginBottom: 20,
  },
  subHeading: {
    marginTop: 60,
    alignSelf: "center",
    marginBottom: 20,
    fontSize: 28,
  },
});

export default CareScheduleScreen;
