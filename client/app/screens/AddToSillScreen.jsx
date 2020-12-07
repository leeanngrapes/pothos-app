import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import * as Yup from "yup";
//import DateTimePicker from "@react-native-community/datetimepicker";

import AppButton from "../components/AppButton";
import AppForm from "../components/forms/AppForm";
import AppPicker from "../components/forms/AppPicker";
import AppTextInput from "../components/AppTextInput";
import CareIcons from "../components/CareIcons";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import { AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  location: Yup.object().required().nullable().label("Location"),
  //date: Yup.string().required().label("Date added"),
  note: Yup.string().label("Note"),
});

const locations = [
  { label: "Living room", value: 1 },
  { label: "Kitchen", value: 2 },
  { label: "Bedroom", value: 3 },
];

function AddToSillScreen({ navigation }) {
  //const [plantName, setPlantName] = useState("");
  //const [location, setLocation] = useState("");
  //const [notes, setNotes] = useState("");

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
    <Screen>
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
          <AppForm
            initialValues={{
              name: "",
              location: null,
              date: "",
              note: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField maxLength={50} name="name" placeholder="Name" />
            <AppFormPicker
              items={locations}
              name="location"
              placeholder="Location"
            />
            {/* <AppFormField maxLength={20} name="date" placeholder="Date added" /> */}
            <AppFormField
              maxLength={300}
              multiline
              name="note"
              numberOfLines={3}
              placeholder="Notes"
            />
            <SubmitButton title="Add to Sill" />
          </AppForm>

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

export default AddToSillScreen;
