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

function ViewPlantScreen() {
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
          <AppText>Fiddler</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>Living Room</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>11/11/2020</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>Loving life!</AppText>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Edit plant"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
        <Button
          title="Remove plant"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttons: {},
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

export default ViewPlantScreen;
