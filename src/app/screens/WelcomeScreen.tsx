import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import colors from "../colors/colors";
import AppText from "../components/AppText";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText
          style={styles.tagLine}
          children={<Text>Sell what you don't need</Text>}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => console.log("login pressed")} />
        <AppButton
          title="Register"
          onPress={() => console.log("singin pressed")}
          color={"secondary"}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    height: 60,
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagLine: {
    fontWeight: "bold",
    fontSize: 26,
    paddingVertical: 10,
  },
});
