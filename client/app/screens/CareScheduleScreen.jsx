import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Alert } from "react-native";

import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Screen from "../components/Screen";
import { ListItem, ListItemDeleteAction } from "../components/lists";
import routes from "../navigation/routes";
import AppText from "../components/AppText";

//NOTE: as-is, must update to exactly current Sill
//If instead want to render SillItems, can do that.
//But the swipe to delete needs to be done.
//Retry after doing click to delete button?
//Could make a "tasks" Atlas collection and delete from that.

const initialTasks = [
  {
    id: 1,
    title: "Lippy",
    subTitle: "Living Room",
    image: require("../assets/jade-plant.jpg"),
  },
  {
    id: 2,
    title: "Floof",
    subTitle: "Office",
    image: require("../assets/fiddle-leaf-fig-plant.jpg"),
  },
];

function CareScheduleScreen({ navigation }) {
  const [tasks, setTasks] = useState(initialTasks);
  //const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/sill")
  //     .then((res) => res.json())
  //     .then((jsonRes) => {
  //       console.log(jsonRes);
  //       setTasks(jsonRes);
  //     });
  //   console.log("Made it through fetch");
  // }, []);

  const handleDelete = (task) => {
    //delete the item from careschedulescreen
    //use a useEffect hook here to fetch DELETE
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
        // keyExtractor={(item, index) => {
        //   return index.toString();
        // }}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            //key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            // onPress={() =>
            //   navigation.navigate(routes.VIEW_PLANT, {
            //     nickname: item.nickname,
            //     location: item.location.label,
            //     note: item.note,
            //     imageUri: item.imageUri,
            //     commonName: item.commonName,
            //     scientificName: item.scientificName,
            //     waterInfo: item.waterInfo,
            //     lightInfo: item.lightInfo,
            //     fertilizerInfo: item.fertilizerInfo,
            //     pruningInfo: item.pruningInfo,
            //   })
            // }
            renderRightActions={() => (
              <ListItemDeleteAction
                //onPress={() => Alert.alert("Checked off!")}
                onPress={() => handleDelete(item)}
              />
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
