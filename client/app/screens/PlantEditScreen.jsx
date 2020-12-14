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

function PlantEditScreen({ route, navigation }) {
  const { title } = route.params;
  const { subTitle } = route.params;
  const { imageUri } = route.params;
  const { waterInfo } = route.params;
  const { lightInfo } = route.params;
  const { fertilizerInfo } = route.params;
  const { pruningInfo } = route.params;

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
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Sending plant failed", err);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        //setList(jsonRes);
      });
    console.log("Made it through fetch");
  }, []);

  return (
    <Screen>
      <View style={styles.background}>
        <View style={styles.cardContainer}>
          <PlantCard title={title} subTitle={subTitle} imageUri={imageUri} />
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate("PlantInfo", {
              title: title,
              subTitle: subTitle,
              imageUri: imageUri,
              waterInfo: waterInfo,
              lightInfo: lightInfo,
              fertilizerInfo: fertilizerInfo,
              pruningInfo: pruningInfo,
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
            }}
            //onSubmit={(values) => Alert.alert(values)}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {/* select an image? */}

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
            <SubmitButton
              title="Submit"
              onPress={() =>
                navigation.navigate("PlantEdit", {
                  title: item.commonName,
                  subTitle: item.scientificName,
                  imageUri: item.imageUri,
                  waterInfo: item.waterInfo,
                  lightInfo: item.lightInfo,
                  fertilizerInfo: item.fertilizerInfo,
                  pruningInfo: item.pruningInfo,
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

export default PlantEditScreen;
