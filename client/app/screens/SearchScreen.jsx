import React from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";

const searchItems = [
  {
    id: 1,
    title: "Fiddle Leaf Fig",
    subTitle: "Ficus lyrata",
    image: require("../assets/fiddle-leaf-fig-plant.jpg"),
  },
  {
    id: 2,
    title: "Jade",
    subTitle: "Crassula ovata",
    image: require("../assets/jade-plant.jpg"),
  },
  {
    id: 3,
    title: "Philodendron, Brazilian",
    subTitle: "Philodendron hederaceum",
    image: require("../assets/philodendron-plant.jpg"),
  },
  {
    id: 4,
    title: "Pothos, Golden",
    subTitle: "Epipremnum aureum",
    image: require("../assets/pothos-plant.jpg"),
  },
  {
    id: 5,
    title: "Snake Plant",
    subTitle: "Dracaena trifasciata",
    image: require("../assets/snake-plant.jpg"),
  },
  {
    id: 6,
    title: "Spider Plant",
    subTitle: "Chlorophytum comosum",
    image: require("../assets/spider-plant.jpg"),
  },
];

function SearchScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.title}>
        <Heading>Search</Heading>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Find a plant..." />
      </View>
      <View style={styles.results}>
        <FlatList
          data={searchItems}
          keyExtractor={(searchItem) => searchItem.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
              onPress={() =>
                navigation.navigate("AddToSill", {
                  title: item.title,
                  subTitle: item.subTitle,
                  image: item.image,
                })
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  results: {
    paddingLeft: 20,
  },
  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: colors.warmWhite,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  title: {},
});

export default SearchScreen;
