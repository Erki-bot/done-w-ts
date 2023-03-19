import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

type PropsType = {
  children?: string;
  style?: any;
};

const AppText = ({ children, style, ...otherProps }: PropsType) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "Roboto",
  },
});
