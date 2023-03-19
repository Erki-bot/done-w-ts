import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";

type PropsType = {
  error?: string;
  visible?: boolean;
};
const ErrorMessage = ({ error, visible }: PropsType) => {
  if (!visible || !error) return null;
  return <AppText style={{ color: "red", fontSize: 12 }}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({});
