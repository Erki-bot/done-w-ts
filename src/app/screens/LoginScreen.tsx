import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validatorScheam = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validatorScheam}
      >
        {() => (
          <>
            <AppFormField
              name="email"
              placeholder="Email"
              autoCapitalize={"none"}
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
            />

            <AppTextInput
              name="password"
              placeholder="Password"
              autoCapitalize={"none"}
              autoCorrect={false}
              icon="lock"
              secureTextEntry={true}
            />
            <SubmitButton title={"Login"} />
          </>
        )}
      </Formik>

      {/* <AppButton title="Register" /> */}
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
