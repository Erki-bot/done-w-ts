import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import RoundIcon from "./RoundIcon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <RoundIcon
        name={item.icon}
        backgroundColor={item.backgroundColor}
        size={60}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    fontSize : 14
  },
});
