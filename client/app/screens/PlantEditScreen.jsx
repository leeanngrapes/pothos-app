import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import * as Yup from "yup";
//import DateTimePicker from "@react-native-community/datetimepicker";

import AppForm from "../components/forms/AppForm";
import CareIcons from "../components/CareIcons";
import colors from "../theme/colors";
import PlantCard from "../components/PlantCard";
import Screen from "../components/Screen";
import { AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  location: Yup.object().required().nullable().label("Location"),
  //date: Yup.string().required().label("Date added"),
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

  return (
    <Screen>
      <View style={styles.background}>
        <View style={styles.cardContainer}>
          <PlantCard title={title} subTitle={subTitle} image={imageUri} />
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

export default PlantEditScreen;
