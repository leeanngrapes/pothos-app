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

function YourSill() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Heading>Your Sill</Heading>
        <Button
          title="Add a plant"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
        <Button
          title="Filter your sill"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
      </View>
      <View style={styles.sill}>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/pothos-plant.jpg")}
          />
          <AppText>Pothy</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/jade-plant.jpg")}
          />
          <AppText>Jadey</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/philodendron-plant.jpg")}
          />
          <AppText>Dendron</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/fiddle-leaf-fig-plant.jpg")}
          />
          <AppText>Fiddler</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/snake-plant.jpg")}
          />
          <AppText>Snakey</AppText>
        </View>
        <View style={styles.sillPlant}>
          <Image
            style={styles.plantImg}
            source={require("../../assets/spider-plant.jpg")}
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
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 100,
  },
});

export default YourSill;