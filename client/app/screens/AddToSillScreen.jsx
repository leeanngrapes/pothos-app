import React from "react";
import { StyleSheet, View, Image, Alert } from "react-native";

import colors from "../theme/colors";
import SubHeading from "../theme/SubHeading";
import AppText from "../theme/AppText";
import AppButton from "../components/AppButton";

function AddToSillScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.title}>
        <Image
          style={styles.plantImg}
          source={require("../assets/fiddle-leaf-fig-plant.jpg")}
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
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Cancel"
            color="accent"
            onPress={() => Alert.alert("Cancel/back button pressed")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Add to Sill"
            onPress={() => Alert.alert("Add plant button pressed")}
          />
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
  form: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: -300,
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
    //flex: 1,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    //marginBottom: -100,
    marginTop: 80,
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
    //flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 50,
  },
});

export default AddToSillScreen;
