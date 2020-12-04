import React from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
} from "react-native";

import colors from "../theme/colors";
import Heading from "../theme/Heading";
import AppText from "../theme/AppText";
import AddToSillScreen from "../screens/AddToSillScreen";

function SearchScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.title}>
        <Heading>Search</Heading>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Find a plant..." />
      </View>

      <View style={styles.results}>
        <ScrollView>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("AddToSill")}
          >
            <View style={styles.plantResult}>
              <Image
                style={styles.plantImg}
                source={require("../assets/fiddle-leaf-fig-plant.jpg")}
              />
              <AppText>Fiddle Leaf Fig</AppText>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../assets/jade-plant.jpg")}
            />
            <AppText>Jade</AppText>
          </View>

          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../assets/philodendron-plant.jpg")}
            />
            <AppText>Philodendron, Brazilian</AppText>
          </View>
          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../assets/pothos-plant.jpg")}
            />
            <AppText>Pothos, Marbled</AppText>
          </View>

          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../assets/snake-plant.jpg")}
            />
            <AppText>Snake Plant</AppText>
          </View>
          <View style={styles.plantResult}>
            <Image
              style={styles.plantImg}
              source={require("../assets/spider-plant.jpg")}
            />
            <AppText>Spider Plant</AppText>
          </View>
        </ScrollView>
      </View>
    </View>
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
    top: -30,
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    //top: 50,
  },
});

export default SearchScreen;
