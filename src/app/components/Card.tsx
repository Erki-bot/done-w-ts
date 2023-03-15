import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { CardProps } from "../../interfaces/CardProps";
import colors from "../config/colors";
import AppText from "./AppText";
import DescriptionComponent from "./DescriptionComponent";
import TouchableIcon from "./TouchableIcon";

const Card = (props: CardProps) => {
  return (
    <TouchableIcon
    onPress={props.onPress}>
        <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <DescriptionComponent title={props.title} subTitle = {props.subTitle}/>
    </View>
    </TouchableIcon>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: "hidden",
    marginVertical : 15
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },

});
