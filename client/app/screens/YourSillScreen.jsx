import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import colors from "../theme/colors";
import Heading from "../theme/Heading";
import AppText from "../theme/AppText";
import AppButton from "../components/AppButton";
import SillItem from "../components/SillItem";

function YourSillScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Heading>Your Sill</Heading>
      </View>
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
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../assets/pothos-plant.jpg")}
          />
          <AppText>Pothy</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../assets/jade-plant.jpg")}
          />
          <AppText>Jadey</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../assets/philodendron-plant.jpg")}
          />
          <AppText>Dendron</AppText>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("ViewPlant")}>
          <SillItem
            image={require("../assets/fiddle-leaf-fig-plant.jpg")}
            title="Fiddler"
          />
        </TouchableOpacity>

        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../assets/snake-plant.jpg")}
          />
          <AppText>Snakey</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../assets/spider-plant.jpg")}
          />
          <AppText>Spidey</AppText>
        </View>
      </View>
    </SafeAreaView>
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
    //width: "100%",
    flex: 1,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  plantImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10,
  },
  sill: {
    flex: 2,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sillPlant: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    //flex: 1,
    //justifyContent: "flex-start",
    //alignItems: "center",
    marginBottom: 10,
  },
});

export default YourSillScreen;
