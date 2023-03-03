import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { CardProps } from "../../interfaces/CardProps";
import colors from "../colors/colors";
import AppText from "./AppText";

const Card = (props: CardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    fontWeight: "none",
  },
  subTitle: {
    color: colors.blue,
    marginBottom: 10,
  },
  titleContainer: {
    paddingHorizontal: 20,
  },
});
