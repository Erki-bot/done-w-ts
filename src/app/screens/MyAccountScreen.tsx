import {
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListIconItem from "../components/ListIconItem";
import ListItem from "../components/ListItem";
import colors from "../colors/colors";
import ItemsSeparator from "../components/ItemsSeparator";
const items = [
  {
    id: 1,
    icon: "format-list-bulleted",
    description: "My listings",
    color: "primary",
  },
  {
    id: 2,
    icon: "email",
    description: "My messages",
    color: "secondary",
  },
];
const logOut = {
  id: 3,
  icon: "logout",
  description: "Logout",
  color: "warning",
};
const MyAccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.userContainer}>
        <ListItem
          size={70}
          title={"Erki"}
          subTitle={"kikimahueric@gmail.com"}
          image={require("../assets/erki.png")}
          onPress={() => console.log()}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={items}
          keyExtractor={(it) => it.id.toString()}
          renderItem={({ item }) => (
            <ListIconItem
              onPress={() => console.log()}
              color={item.color}
              icon={item.icon}
              description={item.description}
              iconColor={"white"}
            />
          )}
          ItemSeparatorComponent={ItemsSeparator}
        />
      </View>
      <View>
        <ListIconItem
          onPress={() => console.log()}
          color={logOut.color}
          icon={logOut.icon}
          description={logOut.description}
        />
      </View>
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.backGray,
  },
  userContainer: {
    paddingVertical: 30,
  },
  listContainer: {
    paddingBottom: 30,
  },
});
