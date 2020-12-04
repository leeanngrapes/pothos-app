import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../theme/colors";
import SubHeading from "../theme/SubHeading";
import AppText from "../theme/AppText";
import AppButton from "../components/AppButton";
import CareIcons from "../components/CareIcons";

function ViewPlantScreen({ navigation }) {
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
          <AppText>Fiddler</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>Living Room</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>11/11/2020</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>She is simply loving life!</AppText>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Edit"
            onPress={() => Alert.alert("Edit button pressed")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Remove"
            color="accent"
            onPress={() => Alert.alert("Remove button pressed")}
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
  title: {
    //flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 30,
  },
});

export default ViewPlantScreen;
