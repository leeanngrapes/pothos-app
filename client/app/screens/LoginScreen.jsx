import React from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import colors from "../theme/colors";
import ErrorMessage from "../components/ErrorMessage";
import Heading from "../components/Heading";
import Screen from "../components/Screen";
import SubHeading from "../components/SubHeading";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
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
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => Alert.alert(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  placeholder="Email"
                  textContentType="emailAddress"
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                />
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />

                <AppButton
                  title="Log In"
                  color="accent"
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
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
