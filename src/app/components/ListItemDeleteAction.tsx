import { GestureResponderEvent, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ListItemDeleteAction = (props:{onPress:(event: GestureResponderEvent) => void}) => {
  return (
   <TouchableWithoutFeedback
   onPress={props.onPress}>
     <View style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color={colors.white}
        size={50}
      />
    </View>
   </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    width: 80,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});
