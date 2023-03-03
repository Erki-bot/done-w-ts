import { StyleSheet, Text, View,StatusBar } from "react-native";
import React from "react";
import Card from "../components/Card";
import colors from "../colors/colors";

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: StatusBar.currentHeight*3,
    backgroundColor : colors.gray
  },
});
