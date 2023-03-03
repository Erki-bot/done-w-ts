import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import DescriptionComponent from "../components/DescriptionComponent";
import AppText from "../components/AppText";
import colors from "../colors/colors";

const ListingDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
      </View>
      <View style={styles.userDescriptionContainer}>
        <Image source={props.userAvatar} style={styles.userAvatar} />
        <View style={styles.userContainer}>
          <AppText style={styles.userName}>{props.user.name}</AppText>
          <AppText style={styles.itemsCount}>{props.user.description}</AppText>
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  userContainer: {
    paddingLeft: 10,
  },
  userName: {
    fontWeight: "600",
    fontSize : 16

  },
  itemsCount: {
    fontWeight: "normal",
    fontSize: 14,
    color: 'gray',
  },
  userAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userDescriptionContainer: {
    margin: 20,
    marginTop: 40,
    flexDirection: "row",
  },
  title: {
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 22
  },
  subTitle: {
    color: colors.blue,
    marginBottom: 10,
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
