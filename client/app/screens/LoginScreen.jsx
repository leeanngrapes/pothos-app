import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";
import * as Yup from "yup";
//import axios from "axios";

import colors from "../theme/colors";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import SubHeading from "../components/SubHeading";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
//import AppNavigator from "../navigation/AppNavigator";
//import YourSillScreen from "../screens/YourSillScreen";

const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  //const [loginFailed, setLoginFailed] = useState(false);

  // const handleSubmit = ({ email, password }) => {
  //   //pass in email and password from database
  //   //if login fails, return setLoginFailed(true);
  //   //if it goes well, setLoginFailed(false);
  //   console.log(result.data);
  // };

  // const handleSubmit = () => {
  //   fetch("http://localhost:5000/users/login", {
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
  //       console.log("Sending login failed", err);
  //     });
  //   console.log("Made it through fetch");
  // };

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
            initialValues={{ email: "", password: "" }}
            //onSubmit={(values) => Alert.alert(values)}
            onSubmit={() => navigation.navigate("App")}
            validationSchema={loginSchema}
          >
            {/* <ErrorMessage
              error="Invalid email and/or password"
              visible={loginFailed}
            /> */}
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
            <SubmitButton
              title="Submit"
              onPress={() => navigation.navigate("App")}
            />
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

export default LoginScreen;
