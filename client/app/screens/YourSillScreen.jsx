import React from "react";
import { StyleSheet, View, Alert, FlatList } from "react-native";

import colors from "../theme/colors";
import Heading from "../theme/Heading";
import AppButton from "../components/AppButton";
import SillItem from "../components/SillItem";
import Screen from "../components/Screen";

const sillItems = [
  {
    id: 1,
    title: "Fiddler",
    image: require("../assets/fiddle-leaf-fig-plant.jpg"),
  },
  {
    id: 2,
    title: "Jadeyyyy",
    image: require("../assets/jade-plant.jpg"),
  },
  {
    id: 3,
    title: "Dendron",
    image: require("../assets/philodendron-plant.jpg"),
  },
  {
    id: 4,
    title: "Pothy",
    image: require("../assets/pothos-plant.jpg"),
  },
  {
    id: 5,
    title: "Snakey Plant",
    image: require("../assets/snake-plant.jpg"),
  },
  {
    id: 6,
    title: "Spidey Plant",
    image: require("../assets/spider-plant.jpg"),
  },
  {
    id: 7,
    title: "Spidey Plant",
    image: require("../assets/spider-plant.jpg"),
  },
  {
    id: 8,
    title: "Spidey Plant",
    image: require("../assets/spider-plant.jpg"),
  },
  {
    id: 9,
    title: "Spidey Plant",
    image: require("../assets/spider-plant.jpg"),
  },
  {
    id: 10,
    title: "Spidey Plant",
    image: require("../assets/spider-plant.jpg"),
  },
];

const numColumns = 3;

function YourSillScreen({ navigation }) {
  return (
    <Screen style={styles.background}>
      <Heading>Your Sill</Heading>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Add A Plant"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Filter"
            color="accent"
            onPress={() => Alert.alert("Filter button pressed")}
          />
        </View>
      </View>
      <View style={styles.sill}>
        <FlatList
          data={sillItems}
          keyExtractor={(sillItem) => sillItem.id.toString()}
          renderItem={({ item }) => (
            <SillItem
              title={item.title}
              image={item.image}
              onPress={() => navigation.navigate("ViewPlant")}
            />
          )}
          numColumns={numColumns}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  sill: {
    //flex: 2,
    //justifyContent: "center",
    // flexDirection: "row",
    // flexWrap: "wrap",
    //alignContent: "center",
  },
});

export default YourSillScreen;
