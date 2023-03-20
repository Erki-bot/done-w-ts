import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import AppText from "./AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <GestureHandlerRootView>
      <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.label}</AppText>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
