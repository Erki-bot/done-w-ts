import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../colors/colors";
import AppText from "./AppText";
import TouchableIcon from "./TouchableIcon";
import Icon from "./Icon";
const ListIconItem = (props: {
  icon: string;
  description: string;
  color: string;
  iconColor: string;
  onPress: () => void;
}) => {
  return (
    <TouchableIcon onPress={props.onPress}>
      <View style={[styles.container]}>
        <Icon
          name={props.icon}
          iconColor={props.iconColor}
          backgroundColor={colors[props.color]}
        />
        <AppText style={styles.text}>{props.description}</AppText>
      </View>
    </TouchableIcon>
  );
};

export default ListIconItem;
const size = 40;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    alignItems: "center",
  },

  description: {},
  text: {
    fontWeight: "600",
    marginLeft: 10,
    fontSize: 16,
  },
});
