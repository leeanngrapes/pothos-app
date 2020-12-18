import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import SearchItem from "../components/lists/SearchItem";
import routes from "../navigation/routes";

//TODO in V2: Add search functionality

function SearchScreen({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((jsonRes) => {
        setList(jsonRes);
      });
    console.log("Fetched the plants from database");
  }, []);

  return (
    <Screen>
      <View>
        <Heading>Browse</Heading>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Find a plant..." />
      </View>

      <FlatList
        data={list}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => (
          <SearchItem
            key={item.id}
            commonName={item.commonName}
            scientificName={item.scientificName}
            imageUri={item.imageUri}
            onPress={() =>
              navigation.navigate(routes.PLANT_ADD, {
                commonName: item.commonName,
                scientificName: item.scientificName,
                imageUri: item.imageUri,
                waterInfo: item.waterInfo,
                lightInfo: item.lightInfo,
                fertilizerInfo: item.fertilizerInfo,
                pruningInfo: item.pruningInfo,
              })
            }
          />
        )}
      />
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
});

export default SearchScreen;
