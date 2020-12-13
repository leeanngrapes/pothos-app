import React from "react";
import { StyleSheet, View, Alert, FlatList } from "react-native";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import AppButton from "../components/AppButton";
import SillItem from "../components/SillItem";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

//For Sill, check Plants, IF has "name", add to Sill
//Will this work?? If not, reconsider PlantModel

const sillItems = [
  {
    id: 1,
    name: "Fiddler",
    title: "Fiddle Leaf Fig",
    subTitle: "Ficus lyrata",
    location: "Living room",
    dateAdded: "1/2/2020",
    note: "Loves to party",
    image: require("../assets/fiddle-leaf-fig-plant.jpg"),
  },
  {
    id: 2,
    name: "Mrs. Jade",
    title: "Jade",
    subTitle: "Crassula ovata",
    location: "Bedroom",
    dateAdded: "2/2/2020",
    note: "Very needy",
    image: require("../assets/jade-plant.jpg"),
  },
  {
    id: 3,
    name: "Dendron",
    title: "Philodendron, Brazilian",
    subTitle: "Philodendron hederaceum",
    location: "Dining room",
    dateAdded: "3/2/2020",
    note: "Thirsty always",
    image: require("../assets/philodendron-plant.jpg"),
  },
  {
    id: 4,
    name: "Pothy",
    title: "Pothos, Golden",
    subTitle: "Epipremnum aureum",
    location: "Office",
    dateAdded: "4/2/2020",
    note: "Inspires me to be better",
    image: require("../assets/pothos-plant.jpg"),
  },
  {
    id: 5,
    name: "Sssnakey",
    title: "Snake Plant",
    subTitle: "Dracaena trifasciata",
    location: "Kitchen",
    dateAdded: "5/2/2020",
    note: "Keeps me awake all night",
    image: require("../assets/snake-plant.jpg"),
  },
  {
    id: 6,
    name: "Spidey",
    title: "Spider Plant",
    subTitle: "Chlorophytum comosum",
    location: "Entryway",
    dateAdded: "6/2/2020",
    note: "Wants to die",
    image: require("../assets/spider-plant.jpg"),
  },
  {
    id: 7,
    name: "Pearly",
    title: "String of Pearls Plant",
    subTitle: "Senecio rowleyanus",
    location: "Kitchen",
    dateAdded: "7/2/2020",
    note: "The most beautiful plant ever",
    image: require("../assets/string-of-pearls-plant.jpg"),
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
            onPress={() => navigation.navigate(routes.SEARCH)}
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
              name={item.name}
              image={item.image}
              onPress={() =>
                navigation.navigate(routes.VIEW_PLANT, {
                  name: item.name,
                  title: item.title,
                  subTitle: item.subTitle,
                  location: item.location,
                  note: item.note,
                  image: item.image,
                })
              }
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
    paddingHorizontal: 20,
  },
});

export default YourSillScreen;
