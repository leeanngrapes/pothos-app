import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import CareIcons from "../components/CareIcons";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import { AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  nickname: Yup.string().required().min(1).label("Nickname"),
  location: Yup.object().required().nullable().label("Location"),
  note: Yup.string().label("Note"),
});

const locations = [
  { label: "Bedroom", value: 1 },
  { label: "Dining room", value: 2 },
  { label: "Entryway", value: 3 },
  { label: "Kitchen", value: 4 },
  { label: "Living room", value: 5 },
  { label: "Office", value: 6 },
];

//add

function EditPlantScreen({ route, navigation }) {
  const { nickname } = route.params;
  const { location } = route.params;
  const { note } = route.params;
  const { imageUri } = route.params;
  const { commonName } = route.params;

  const handleSubmit = ({ nickname, location, note, waterInfo, lightInfo }) => {
    //send POST request to Database https://localhost:5000/sill/add
    fetch("http://localhost:5000/sill/add/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname, location, note, waterInfo, lightInfo }),
    })
      .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      // })
      .catch((err) => {
        console.log("Sending plant failed", err);
      });
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/plants")
  //     .then((res) => res.json())
  //     .then((jsonRes) => {
  //       console.log(jsonRes);
  //       //setList(jsonRes);
  //     });
  //   console.log("Made it through fetch");
  // }, []);

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
        <View style={styles.form}>
          <AppForm
            initialValues={{
              nickname: nickname,
              location: location.label,
              note: note,
            }}
            //onSubmit={(values) => Alert.alert(values)}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {/* select an image? */}

            <AppFormField
              maxLength={50}
              name="nickname"
              placeholder={nickname}
            />
            <AppFormPicker
              items={locations}
              name="location"
              placeholder={location.label}
            />
            <AppFormField
              maxLength={300}
              multiline
              name="note"
              numberOfLines={3}
              placeholder={note}
            />
            <SubmitButton
              title="Update"
              onPress={() =>
                navigation.navigate("AddPlant", {
                  commonName: item.commonName,
                  scientificName: item.scientificName,
                  imageUri: item.imageUri,
                  waterInfo: item.waterInfo,
                  lightInfo: item.lightInfo,
                  fertilizerInfo: item.fertilizerInfo,
                  pruningInfo: item.pruningInfo,
                  nickname: nickname,
                  location: location,
                  note: note,
                })
              }
            />
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
