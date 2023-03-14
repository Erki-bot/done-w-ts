import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { ScreenProps } from "../../interfaces/ScreenProps";

const Screen = (props: ScreenProps) => {
  return <SafeAreaView style={[styles.container,props.style]}>{props.children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
