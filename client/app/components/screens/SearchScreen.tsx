import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";

import colors from "../../config/colors";
import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import AppText from "../shared/AppText";

function SearchScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Heading>Search</Heading>
        <View style={styles.searchBar}>
          <AppText>Find a plant...</AppText>
        </View>
      </View>
      <View style={styles.results}>
        <View style={styles.plantResult}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/fiddle-leaf-fig-plant.jpg")}
          />
          <AppText>Fiddle Leaf Fig</AppText>
        </View>
        <View style={styles.plantResult}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/jade-plant.jpg")}
          />
          <AppText>Jade</AppText>
        </View>

        <View style={styles.plantResult}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/philodendron-plant.jpg")}
          />
          <AppText>Philodendron, Brazilian</AppText>
        </View>
        <View style={styles.plantResult}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/pothos-plant.jpg")}
          />
          <AppText>Pothos, Marbled</AppText>
        </View>

        <View style={styles.plantResult}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/snake-plant.jpg")}
          />
          <AppText>Snake Plant</AppText>
        </View>
        <View style={styles.plantResult}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/spider-plant.jpg")}
          />
          <AppText>Spider Plant</AppText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  plantImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10,
    marginHorizontal: 20,
  },
  results: {
    flex: 3,
  },
  plantResult: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: colors.warmWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 50,
  },
});

export default SearchScreen;
