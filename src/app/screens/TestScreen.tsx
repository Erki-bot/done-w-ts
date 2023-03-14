import { StyleSheet, View, StatusBar } from "react-native";
import React from "react";
import colors from "../colors/colors";
import ListIconItem from "../components/ListIconItem";

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <ListIconItem name="email" color="secondary" description="My message" />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight * 3,
    backgroundColor: colors.gray,
  },
});
