import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
//import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../theme/colors";
import AppButton from "../components/AppButton";
import CareIcons from "../components/CareIcons";
import PlantCard from "../components/PlantCard";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";

const locations = [
  { label: "Living room", value: 1 },
  { label: "Kitchen", value: 2 },
  { label: "Bedroom", value: 3 },
];

function AddToSillScreen({ navigation }) {
  const [plantName, setPlantName] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  // const [dateAdded, setDateAdded] = useState(new Date(1598051730000));

  // const [mode, setMode] = useState("date");
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === "ios");
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode("date");
  // };

  return (
    <View style={styles.background}>
      <View style={styles.cardContainer}>
        <PlantCard
          title="Fiddle Leaf Fig"
          subTitle="Ficus lyrata"
          image={require("../assets/fiddle-leaf-fig-plant.jpg")}
        />
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("PlantInfo")}
      >
        <View>
          <CareIcons />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.form}>
        {/* <Text>{plantName}</Text> */}
        <AppTextInput
          placeholder="Give your plant a name"
          onChangeText={(text) => setPlantName(text)}
          icon="leaf"
        />
        {/* <Text>{location}</Text> */}
        <AppPicker
          selectedItem={location}
          onSelectItem={(item) => setLocation(item)}
          items={locations}
          placeholder="Set location"
          icon="home"
        />

        {/* <Text>{dateAdded}</Text> */}
        <AppTextInput
          placeholder="Set date added"
          onChangeText={(text) => setDateAdded(text)}
          icon="calendar"
        />
        {/* <Text>{notes}</Text> */}
        {/* <AppButton onPress={showDatepicker} title="Select date added" />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateAdded}
            mode={mode}
            display="compact"
            onChange={onChange}
          />
        )} */}

        <AppTextInput
          placeholder="Notes"
          onChangeText={(text) => setNotes(text)}
          icon="note"
          multiline={true}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Cancel"
            color="accent"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Add to Sill"
            onPress={() => navigation.navigate("YourSill")}
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

export default AddToSillScreen;
