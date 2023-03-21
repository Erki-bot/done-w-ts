import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

const requestPermissions = async () => {
  const result = await ImagePicker.requestCameraPermissionsAsync();
  console.log(result);
};
import Screen from "../app/components/Screen";
import AppText from "../app/components/AppText";
const TestUserPermission = () => {

  useEffect(()=>{
    requestPermissions()
  },[])
  return (
    <Screen>
      <AppText>Hello</AppText>
    </Screen>
  );
};

export default TestUserPermission;

const styles = StyleSheet.create({});
