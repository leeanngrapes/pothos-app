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

function AddToSillScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.title}>
        <Image
          style={styles.plantImg}
          source={require("../../assets/fiddle-leaf-fig-plant.jpg")}
        />
        <SubHeading>Fiddle Leaf Fig</SubHeading>
        <AppText>Ficus lyrata</AppText>
      </View>
      <View style={styles.iconBar}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
      </View>
      <View style={styles.form}>
        <View style={styles.formField}>
          <AppText>Name your plant...</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>Add to a room...</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>Date added...</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>Add a note...</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  form: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -300,
  },
  formField: {
    width: "80%",
    height: 50,
    padding: 10,
    justifyContent: "center",
    backgroundColor: colors.warmWhite,
    marginBottom: 10,
  },
  iconBar: {
    flex: 1,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: -100,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
  },
  plantImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    margin: 10,
  },
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 50,
  },
});

export default AddToSillScreen;
