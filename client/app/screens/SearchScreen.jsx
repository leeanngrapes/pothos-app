import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import SearchItem from "../components/lists/SearchItem";

function SearchScreen({ navigation }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        setList(jsonRes);
      });
    console.log("Made it through fetch");
  }, []);

  return (
    <Screen>
      <View style={styles.title}>
        <Heading>Search</Heading>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Find a plant..." />
      </View>
      <View>
        <FlatList
          data={list}
          keyExtractor={(p, id) => id}
          renderItem={({ item }) => (
            <SearchItem
              key={id}
              commonName={item.commonName}
              scientificName={item.scientificName}
              imageUrl={item.imageUrl}
              onPress={() =>
                navigation.navigate("AddToSill", {
                  title: item.commonName,
                  subTitle: item.scientificName,
                  imageUrl: item.imageUrl,
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
