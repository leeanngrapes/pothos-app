import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";

import colors from "../theme/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import CareIcons from "../components/CareIcons";
import PlantCard from "../components/PlantCard";
import AppTextInput from "../components/AppTextInput";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { ScrollView } from "react-native-gesture-handler";
import SubHeading from "../components/SubHeading";

// Fn to handle form submit of Care Notes --> not working
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

function ViewPlantScreen({ route, navigation }) {
  const { nickname } = route.params;
  const { location } = route.params;
  const { note } = route.params;
  const { imageUri } = route.params;
  const { commonName } = route.params;
  const { scientificName } = route.params;
  const { waterInfo } = route.params;
  const { lightInfo } = route.params;
  const { fertilizerInfo } = route.params;
  const { pruningInfo } = route.params;
  const { id } = route.params;

  // DELETE request to Sill
  const handleDelete = (_id) => {
    console.log(
      JSON.stringify({
        _id: _id,
      })
    );
    fetch("http://localhost:5000/sill/", {
      method: "DELETE",
      body: JSON.stringify({
        _id: _id,
        //nickname: nickname,
      }),
      //body: _id,
      headers: {
        "Content-Type": "application/json",
      },
    })
      //.then((response) => console.log(response.json()))
      .then((response) => response.json())

      .then((data) => {
        console.log(`Deleted plant: ` + data);
        console.log(data);
      })
      //getting: Deleted plant: null
      .catch((err) => {
        console.log("Deleting plant failed", err);
      });
  };

  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.cardContainer}>
          <PlantCard
            title={nickname}
            subTitle={commonName}
            imageUri={imageUri}
          />
        </View>

        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate("PlantInfo", {
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
          <View style={styles.formField}>
            <AppText>{nickname}</AppText>
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
                navigation.navigate("EditPlant", {
                  nickname: nickname,
                  commonName: commonName,
                  imageUri: imageUri,
                  note: note,
                  location: location,
                  id: id,
                })
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              title="Remove"
              color="accent"
              //onPress={() => Alert.alert("Remove button pressed")}
              onPress={() => handleDelete(id)}
            />
          </View>
        </View>

        {/* //Form for adding care notes below */}
        <View style={styles.noteSection}>
          <AppForm
            initialValues={{
              nickname: "",
              location: null,
              note: "",
              imageUri: "",
            }}
            //onSubmit={(values) => Alert.alert(values)}
            onSubmit={handleSubmit}
            //validationSchema={validationSchema}
          >
            <SubHeading style={styles.subHeading}>Care Notes</SubHeading>
            <AppText>Fertilization:</AppText>
            <AppFormField
              maxLength={300}
              name="fertilizationNotes"
              placeholder="Add a note..."
              numberOfLines={3}
            />
            <AppText>Pruning:</AppText>
            <AppFormField
              maxLength={300}
              multiline
              name="pruningNotes"
              numberOfLines={3}
              placeholder="Add a note..."
            />
            <AppText>Propagation:</AppText>
            <AppFormField
              maxLength={300}
              multiline
              name="propagationNotes"
              numberOfLines={3}
              placeholder="Add a note..."
            />
            <SubmitButton title="Add Notes" />
          </AppForm>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flex: 1,
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
  noteSection: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 50,
  },
  subHeading: {
    alignSelf: "center",
    marginBottom: 10,
  },
  plantImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  title: {
    justifyContent: "flex-start",
    alignItems: "center",
    top: 30,
  },
});

export default ViewPlantScreen;
