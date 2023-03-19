import { StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/form";


const validatorSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validatorSchema}
      >
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
        <SubmitButton title={"Login"} />
      </AppForm>

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
