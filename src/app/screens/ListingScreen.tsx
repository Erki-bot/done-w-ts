import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";

const items = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    price: "$100",
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: "$1000",
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={{ paddingTop: 30, paddingHorizontal: 15 }}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              onPress={() => console.log()}
              title={item.title}
              subTitle={item.price}
              image={item.image}
            />
          )}
        />
      </View>
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGray,
  },
});
