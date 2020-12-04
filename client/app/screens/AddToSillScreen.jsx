import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

import colors from "../theme/colors";
import SubHeading from "../theme/SubHeading";
import AppText from "../theme/AppText";
import AppButton from "../components/AppButton";
import CareIcons from "../components/CareIcons";
import PlantInfoScreen from "../screens/PlantInfoScreen";

function AddToSillScreen({ navigation }) {
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
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("PlantInfo")}
      >
        <View>
          <CareIcons />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.form}>
        <View style={styles.formField}>
          <TextInput
            style={styles.text}
            placeholder="Give your plant a name..."
          />
        </View>
        <View style={styles.formField}>
          <TextInput style={styles.text} placeholder="Select room..." />
        </View>
        <View style={styles.formField}>
          <TextInput style={styles.text} placeholder="Date added..." />
        </View>
        <View style={styles.formField}>
          <TextInput style={styles.text} placeholder="Add a note..." />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Cancel"
            color="accent"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Add to Sill"
            onPress={() => navigation.navigate("YourSill")}
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
  plantImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    //margin: 10,
  },

  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
  title: {
    //flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 30,
  },
});

export default AddToSillScreen;
