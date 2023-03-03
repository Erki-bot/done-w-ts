import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../colors/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.icon, styles.close]}>
        <MaterialCommunityIcons name="close" color={colors.white} size={40} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.icon, styles.delete]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={40}
        />
      </TouchableOpacity>

      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 600,
  },
  icon: {
    position: "absolute",
    top: 40,

  },
  close: {
    left: 30,
  },
  delete: {
    right: 30,
  },
});
