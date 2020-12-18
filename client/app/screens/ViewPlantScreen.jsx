import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import colors from "../theme/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import CareIcons from "../components/CareIcons";
import PlantCard from "../components/PlantCard";
import { ScrollView } from "react-native-gesture-handler";
import SubHeading from "../components/SubHeading";

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
  const { fertilizingNote } = route.params;
  const { pruningNote } = route.params;
  const { propagationNote } = route.params;
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
          <SubHeading style={styles.subHeading}>Profile</SubHeading>
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
                  fertilizingNote: fertilizingNote,
                  pruningNote: pruningNote,
                  propagationNote: propagationNote,
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
        <View style={styles.form}>
          <SubHeading style={styles.subHeading}>Care Notes</SubHeading>
          <AppText style={styles.subTitle}>Fertilization:</AppText>
          <View style={styles.formField}>
            <AppText>{fertilizingNote}</AppText>
          </View>
          <AppText style={styles.subTitle}>Pruning:</AppText>
          <View style={styles.formField}>
            <AppText>{pruningNote}</AppText>
          </View>

          <AppText style={styles.subTitle}>Propagation:</AppText>
          <View style={styles.formField}>
            <AppText>{propagationNote}</AppText>
          </View>
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
    marginHorizontal: 10,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  formField: {
    width: "80%",
    padding: 15,
    paddingLeft: 25,
    justifyContent: "center",
    //backgroundColor: colors.warmWhite,
    marginBottom: 15,
    borderRadius: 30,
    borderColor: colors.light,
    borderWidth: 1,
  },
  subHeading: {
    //alignSelf: "center",
    marginBottom: 10,
    textTransform: "uppercase",
    color: colors.primary,
    fontSize: 20,
    letterSpacing: 2,
  },
  plantImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  subTitle: {
    alignSelf: "flex-start",
    paddingLeft: 65,
    paddingBottom: 5,
    color: colors.primary,
  },
  title: {
    justifyContent: "flex-start",
    alignItems: "center",
    top: 30,
  },
});

export default ViewPlantScreen;
