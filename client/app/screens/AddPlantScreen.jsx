import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CareIcons from "../components/CareIcons";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

// Yup validation for the Add to Sill Form
const validationSchema = Yup.object().shape({
  nickname: Yup.string().required().min(1).label("Nickname"),
  location: Yup.object().required().nullable().label("Location"),
  note: Yup.string().label("Note"),
  imageUri: Yup.string().required().label("Image"),
});

// Locations for form drop-down list
const locations = [
  { label: "Bathroom", value: 1 },
  { label: "Bedroom", value: 2 },
  { label: "Dining room", value: 3 },
  { label: "Entryway", value: 4 },
  { label: "Hallway", value: 5 },
  { label: "Kitchen", value: 6 },
  { label: "Living room", value: 7 },
  { label: "Office", value: 8 },
];

function AddPlantScreen({ route, navigation }) {
  // Import params being sent in the route
  const { commonName } = route.params;
  const { scientificName } = route.params;
  const { imageUri } = route.params;
  const { waterInfo } = route.params;
  const { lightInfo } = route.params;
  const { fertilizerInfo } = route.params;
  const { pruningInfo } = route.params;

  // Funciton to handle form submit and add to sill
  const handleSubmit = ({ nickname, location, note, imageUri }) => {
    //send POST request to Database https://localhost:5000/sill/add
    fetch("http://localhost:5000/sill/add/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname, location, note, imageUri }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Added new plant: ` + data);
      })
      .catch((err) => {
        console.log("Sending plant failed", err);
      });
  };

  return (
    <Screen>
      <ScrollView>
        <View style={styles.background}>
          <View style={styles.cardContainer}>
            <PlantCard
              title={commonName}
              subTitle={scientificName}
              imageUri={imageUri}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(routes.INFORMATION, {
                imageUri: imageUri,
                waterInfo: waterInfo,
                lightInfo: lightInfo,
                fertilizerInfo: fertilizerInfo,
                pruningInfo: pruningInfo,
                commonName: commonName,
                scientificName: scientificName,
              })
            }
          >
            <View>
              <CareIcons />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.form}>
            <AppForm
              initialValues={{
                nickname: "",
                location: null,
                note: "",
                imageUri: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <AppFormField
                maxLength={50}
                name="nickname"
                placeholder="Nickname"
              />
              <AppFormPicker
                items={locations}
                name="location"
                placeholder="Location"
              />
              <AppFormField
                maxLength={300}
                multiline
                name="note"
                numberOfLines={3}
                placeholder="Notes"
              />

              <AppFormField name="imageUri" placeholder="Custom Image" />
              <SubmitButton title="Add to Sill" />
            </AppForm>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    paddingTop: 10,
  },
});

export default AddPlantScreen;
