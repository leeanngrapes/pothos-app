import React from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";
import * as Yup from "yup";
import axios from "axios";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import SubHeading from "../components/SubHeading";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const registerSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(50).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

// const handleSubmit = () => {
//   fetch("http://192.168.86.79:5000/users/register", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(),
//   })
//     .then((response) => response.json())
//     .then((responseData) => {
//       console.log(
//         "POST Response",
//         "Reponse body: " + JSON.stringify(responseData)
//       );
//     })
//     .catch((err) => {
//       console.log("Sending registration failed", err);
//     });
//   console.log("Made it through fetch");
// };

function RegisterScreen() {
  return (
    <Screen>
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require("../assets/pothos.jpg")}
      >
        <Heading style={styles.title}>POTHOS</Heading>
        <SubHeading style={styles.tagline}>Take good care</SubHeading>
        <View style={styles.form}>
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            //onSubmit={(values) => Alert.alert(values)}
            onSubmit={() => Alert.alert("Register button clicked")}
            validationSchema={registerSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              name="name"
              placeholder="Name"
              textContentType="name"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Submit" />
          </AppForm>
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  form: {
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
  },
  tagline: {
    fontWeight: "800",
    color: colors.warmWhite,
  },
  title: {
    color: colors.warmWhite,
    fontSize: 60,
    fontWeight: "800",
    marginBottom: 40,
    marginTop: 150,
  },
});

export default RegisterScreen;
