import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { DescriptionComponentProps } from "../../interfaces/DescriptionComponentProps";
import colors from "../config/colors";

const DescriptionComponent = (props: DescriptionComponentProps) => {
  return (
    <View style={styles.titleContainer}>
      <AppText style={styles.title}>{props.title}</AppText>
      <AppText style={styles.subTitle}>{props.subTitle}</AppText>
    </View>
  );
};

export default DescriptionComponent;

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontWeight: "normal",
  },
  subTitle: {
    color: colors.blue,
    marginBottom: 10,
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
