import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppText from "../components/AppText";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import { AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  nickname: Yup.string().min(1).label("Nickname"),
  location: Yup.object().nullable().label("Location"),
  note: Yup.string().label("Note"),
  imageUri: Yup.string().label("Image"),
  fertilizingNote: Yup.string().label("Note"),
  pruningNote: Yup.string().label("Note"),
  propagationNote: Yup.string().label("Note"),
});

const locations = [
  { label: "Bedroom", value: 1 },
  { label: "Dining room", value: 2 },
  { label: "Entryway", value: 3 },
  { label: "Kitchen", value: 4 },
  { label: "Living room", value: 5 },
  { label: "Office", value: 6 },
];

function EditPlantScreen({ route, navigation, values }) {
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
    //send PATCH request to Database https://localhost:5000/sill/add
    // console.log(
    //   JSON.stringify({
    //     _id: _id,
    //   })
    // );
    fetch("http://localhost:5000/sill/", {
      method: "PATCH",
      headers: {
        //Accept: "application/json",
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
            <AppForm
              initialValues={{
                // nickname: nickname,
                // location: location,
                // note: note,
                // imageUri: imageUri,
                nickname: "",
                location: "",
                imageUri: "",
                note: "",
                fertilizingNote: "",
                pruningNote: "",
                propagationNote: "",
              }}
              //onSubmit={(values) => Alert.alert(values)}

              // onSubmit={(values) => {
              //   console.log(values);
              //   handleUpdate({
              //     nickname: values.nickname,
              //     imageUri: values.imageUri,
              //     note: values.note,
              //     location: values.location,
              //     _id: id,
              //   });
              // }}
              onSubmit={(values) => {
                console.log(values);
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
              //onSubmit={handleUpdate}
              validationSchema={validationSchema}
            >
              {/* select an image? */}

              <AppFormField
                maxLength={50}
                name="nickname"
                placeholder={nickname}
                //value={values.nickname}
              />
              <AppFormPicker
                items={locations}
                name="location"
                placeholder={location}
                //value={values.location.label}
              />

              <AppFormField
                name="imageUri"
                placeholder={imageUri}
                //value={values.imageUri}
              />
              <AppFormField
                maxLength={300}
                multiline
                name="note"
                numberOfLines={3}
                placeholder={note}
                //value={values.note}
              />
              <AppText>Care Notes</AppText>
              <AppFormField
                maxLength={300}
                name="fertilizingNote"
                placeholder={fertilizingNote}
                numberOfLines={3}
              />
              <AppFormField
                maxLength={300}
                multiline
                name="pruningNote"
                numberOfLines={3}
                placeholder={pruningNote}
              />
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
});

export default EditPlantScreen;
