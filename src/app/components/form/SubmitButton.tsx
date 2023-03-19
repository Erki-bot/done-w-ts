import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

type PropsType = {
  title: string;
};
const SubmitButton = ({ title }: PropsType) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
