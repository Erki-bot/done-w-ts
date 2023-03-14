import { StyleSheet, TouchableHighlight, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import { ListItemProps } from "../../interfaces/ListItemProps";
import colors from "../colors/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
const ListItem = (props: ListItemProps) => {
  const tap = Gesture.Tap().onStart(() => {
    console.log("tap");
  });``

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={props.renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.lightGray2}
          onPress={props.onPress}
        >
          <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <View style={styles.userContainer}>
              <AppText style={styles.title}>{props.title}</AppText>
              <AppText style={styles.subTitle}>{props.subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;
const size = 70;
const styles = StyleSheet.create({
  userContainer: {
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
  subTitle: {
    fontWeight: "normal",
    fontSize: 14,
    color: "gray",
  },
  image: {
    width: size,
    height: size,
    borderRadius: size / 2,
  },
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
  },
});
