import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, FlatList, Alert } from "react-native";
//import axios from "axios";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import SearchItem from "../components/lists/SearchItem";

function SearchScreen() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        setList(jsonRes);
      });
    console.log("Made it through");
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
        {list.map((p, id) => (
          <SearchItem
            key={id}
            commonName={p.commonName}
            scientificName={p.scientificName}
            imageUrl={p.imageUrl}
          />
        ))}
      </View>
      {/* <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={() => <SearchItem />}
      /> */}
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
