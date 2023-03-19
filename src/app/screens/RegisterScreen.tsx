import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";

const validatorSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().min(4).required().label("Password"),
});
const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validatorSchema}
      >
        <AppFormField name="name" placeholder="Name" icon="account" />
        <AppFormField
          name="email"
          placeholder="Email"
          autoCapitalize={"none"}
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          autoCapitalize={"none"}
          autoCorrect={false}
          icon="lock"
          secureTextEntry={true}
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginTop: 80,
  },
  container: {
    padding: 20,
  },
});
