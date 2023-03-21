import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

const requestPermissions = async () => {
  const result = await ImagePicker.requestCameraPermissionsAsync();
};
import Screen from "../app/components/Screen";
const TestUserPermission = () => {
  return <Screen></Screen>;
};

export default TestUserPermission;

const styles = StyleSheet.create({});
