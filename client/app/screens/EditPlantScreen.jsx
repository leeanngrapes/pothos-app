import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import { AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  nickname: Yup.string().required().min(1).label("Nickname"),
  location: Yup.object().required().nullable().label("Location"),
  note: Yup.string().label("Note"),
  imageUri: Yup.string().label("Image"),
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
  const { id } = route.params;

  //PATCH request to Sill Item
  const handleUpdate = ({ _id, nickname, location, note, imageUri }) => {
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
              note: "",
              imageUri: "",
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
              maxLength={300}
              multiline
              name="note"
              numberOfLines={3}
              placeholder={note}
              //value={values.note}
            />
            <AppFormField
              name="imageUri"
              placeholder={imageUri}
              //value={values.imageUri}
            />
            <SubmitButton title="Update" />
          </AppForm>
        </View>
      </View>
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

export default EditPlantScreen;
