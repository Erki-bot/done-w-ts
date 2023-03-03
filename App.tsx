import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./src/app/components/AppButton";
import TestScreen from "./src/app/screens/TestScreen";
import WelcomeScreen from "./src/app/screens/WelcomeScreen";

export default function App() {
  return (
    // <View style={styles.container}>

    //   <StatusBar style="auto" />
    // </View>
    <TestScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
