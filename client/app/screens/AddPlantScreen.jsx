import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
  Image,
} from "react-native";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
//import * as Permissions from "expo-permissions";

import AppForm from "../components/forms/AppForm";
import CareIcons from "../components/CareIcons";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import { AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import AppButton from "../components/AppButton";
import { ScrollView } from "react-native-gesture-handler";
import ImageInput from "../components/forms/ImageInput";
import FormImagePicker from "../components/forms/FormImagePicker";

// Yup validation for the Add to Sill Form
const validationSchema = Yup.object().shape({
  nickname: Yup.string().required().min(1).label("Nickname"),
  location: Yup.object().required().nullable().label("Location"),
  note: Yup.string().label("Note"),
  imageUri: Yup.string().label("Image"),
});

// Locations for form drop-down list
const locations = [
  { label: "Bedroom", value: 1 },
  { label: "Dining room", value: 2 },
  { label: "Entryway", value: 3 },
  { label: "Kitchen", value: 4 },
  { label: "Living room", value: 5 },
  { label: "Office", value: 6 },
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

  // State variable for image
  const [userImageUri, setUserImageUri] = useState();

  // Request permissions to access photo library
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  // Fn to select image
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setUserImageUri(result.uri);
    } catch (error) {
      console.log("Error reading image.", error);
    }
  };

  // Fn to handle form submit and add to sill
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
          {/* <View>
            <ImageInput
              userImageUri={userImageUri}
              onChangeImage={(uri) => setUserImageUri(uri)}
            />
          </View> */}

          <View style={styles.form}>
            <AppForm
              initialValues={{
                nickname: "",
                location: null,
                note: "",
                imageUri: "",
                //images: [],
              }}
              //onSubmit={(values) => Alert.alert(values)}
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
              {/* <FormImagePicker name="image" /> */}
              {/* <ImageInput
                name="image"
                userImageUri={userImageUri}
                onChangeImage={(uri) => setUserImageUri(uri)}
              /> */}
              <AppFormField name="imageUri" placeholder={imageUri} />
              <SubmitButton
                title="Add to Sill"
                onPress={() =>
                  navigation.navigate("YourSill", {
                    commonName: item.title,
                    subTitle: item.scientificName,
                    imageUri: item.userImageUri,
                    waterInfo: item.waterInfo,
                    lightInfo: item.lightInfo,
                    fertilizerInfo: item.fertilizerInfo,
                    pruningInfo: item.pruningInfo,
                    nickname: nickname,
                    location: location,
                    note: note,
                    imageUri: imageUri,
                  })
                }
              />
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
