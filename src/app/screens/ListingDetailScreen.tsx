import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import DescriptionComponent from "../components/DescriptionComponent";
import AppText from "../components/AppText";
import colors from "../colors/colors";
import ListItem from "../components/ListItem";

const ListingDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subTitle}>{props.subTitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={props.userAvatar}
            title={props.user.name}
            subTitle={props.user.description}
            onPress={()=>console.log()}
          />
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

  title: {
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 22,
  },
  subTitle: {
    color: colors.blue,
    marginBottom: 10,
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});
