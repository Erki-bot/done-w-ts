import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../colors/colors";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});
