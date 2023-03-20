import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import RoundIcon from "./RoundIcon";

const CategoryPickerItem = ({ item, label, onPress }) => {
  return (
    <View style={styles.container}>
      <RoundIcon name={item.icon} />
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {},
});
