import { StyleSheet, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../config/colors";
import Icon from "./Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type PropsType = {
  icon?: string;
  placeholder: string;
};
import defaultStyle from "../config/style";
import AnimatedIcon from "./AnimatedIcon";

const AppTextInput = ({ icon, ...otherProps }: PropsType) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={20} style={styles.icon} />}
      <TextInput
        style={defaultStyle.text}
        cursorColor={colors.darkGray}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGray,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: 10,
    padding: 15,
  },

  icon: {
    marginRight: 10,
  },
});
