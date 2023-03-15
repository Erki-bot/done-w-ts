import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

import colors from "../config/colors";
import { ButtonProps } from "../../interfaces/ButtonProps";

const AppButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[props.color || 'primary']}]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
