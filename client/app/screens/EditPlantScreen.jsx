import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import AppText from "../components/AppText";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import SubHeading from "../components/SubHeading";

const validationSchema = Yup.object().shape({
  nickname: Yup.string().min(1).label("Nickname"),
  location: Yup.object().nullable().label("Location"),
  note: Yup.string().label("Note"),
  imageUri: Yup.string().label("Image"),
  fertilizingNote: Yup.string().label("Note"),
  pruningNote: Yup.string().label("Note"),
  propagationNote: Yup.string().label("Note"),
});

//Locations for dropdown; matched to AddPlantScreen
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

function EditPlantScreen({ route }) {
  const { nickname } = route.params;
  const { location } = route.params;
  const { note } = route.params;
  const { imageUri } = route.params;
  const { commonName } = route.params;
  const { fertilizingNote } = route.params;
  const { pruningNote } = route.params;
  const { propagationNote } = route.params;
  const { id } = route.params;

  //PATCH request to Sill Item
  const handleUpdate = ({
    _id,
    nickname,
    location,
    note,
    imageUri,
    fertilizingNote,
    pruningNote,
    propagationNote,
  }) => {
    fetch("http://localhost:5000/sill/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: _id,
        newNickname: nickname,
        newLocation: location,
        newNote: note,
        newImageUri: imageUri,
        newFertilizingNote: fertilizingNote,
        newPruningNote: pruningNote,
        newPropagationNote: propagationNote,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Sending plant update failed", err);
      });
  };

  return (
    <ScrollView>
      <Screen>
        <View style={styles.background}>
          <View style={styles.cardContainer}>
            <PlantCard
              title={nickname}
              subTitle={commonName}
              imageUri={imageUri}
            />
          </View>

          {/* Formik form  */}
          <View style={styles.form}>
            <SubHeading style={styles.subHeading}>Profile</SubHeading>
            <AppForm
              initialValues={{
                nickname: "",
                location: "",
                imageUri: "",
                note: "",
                fertilizingNote: "",
                pruningNote: "",
                propagationNote: "",
              }}
              onSubmit={(values) => {
                handleUpdate({
                  nickname: values.nickname,
                  imageUri: values.imageUri,
                  note: values.note,
                  location: values.location,
                  fertilizingNote: values.fertilizingNote,
                  pruningNote: values.pruningNote,
                  propagationNote: values.propagationNote,
                  _id: id,
                });
              }}
              validationSchema={validationSchema}
            >
              <AppText style={styles.subTitle}>Nickname</AppText>
              <AppFormField
                maxLength={50}
                name="nickname"
                placeholder={nickname}
              />
              <AppText style={styles.subTitle}>Location</AppText>
              <AppFormPicker
                items={locations}
                name="location"
                placeholder={location}
              />
              <AppText style={styles.subTitle}>Image</AppText>
              <AppFormField name="imageUri" placeholder={imageUri} />
              <AppText style={styles.subTitle}>Note</AppText>
              <AppFormField
                maxLength={300}
                multiline
                name="note"
                numberOfLines={3}
                placeholder={note}
              />
              <SubHeading style={styles.subHeading}>Care Notes</SubHeading>
              <AppText style={styles.subTitle}>Fertilization</AppText>
              <AppFormField
                maxLength={300}
                name="fertilizingNote"
                placeholder={fertilizingNote}
                numberOfLines={3}
              />
              <AppText style={styles.subTitle}>Pruning</AppText>
              <AppFormField
                maxLength={300}
                multiline
                name="pruningNote"
                numberOfLines={3}
                placeholder={pruningNote}
              />
              <AppText style={styles.subTitle}>Propagation</AppText>
              <AppFormField
                maxLength={300}
                multiline
                name="propagationNote"
                numberOfLines={3}
                placeholder={propagationNote}
              />
              <SubmitButton title="Update" />
            </AppForm>
          </View>
        </View>
      </Screen>
    </ScrollView>
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
  subHeading: {
    marginVertical: 10,
    textTransform: "uppercase",
    color: colors.primary,
    fontSize: 20,
    letterSpacing: 2,
  },
  subTitle: {
    alignSelf: "flex-start",
    paddingLeft: 20,
    color: colors.primary,
  },
});

export default EditPlantScreen;
