import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../theme/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import CareIcons from "../components/CareIcons";
import PlantCard from "../components/PlantCard";

function ViewPlantScreen({ route, navigation }) {
  const { name } = route.params;
  const { title } = route.params;
  const { subTitle } = route.params;
  const { location } = route.params;
  const { note } = route.params;
  const { imageUri } = route.params;

  return (
    <View style={styles.background}>
      <View style={styles.cardContainer}>
        <PlantCard title={name} subTitle={title} image={imageUri} />
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
          <AppText>{name}</AppText>
        </View>
        <View style={styles.formField}>
          <AppText>{location}</AppText>
        </View>

        <View style={styles.formField}>
          <AppText>{note}</AppText>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Edit"
            onPress={() =>
              navigation.navigate("PlantEdit", {
                title: name,
                subTitle: title,
                imageUri: imageUri,
              })
            }
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
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
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
    padding: 15,
    paddingLeft: 25,
    justifyContent: "center",
    backgroundColor: colors.warmWhite,
    marginBottom: 10,
    borderRadius: 30,
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
