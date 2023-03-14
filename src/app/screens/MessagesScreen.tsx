import { StyleSheet, FlatList, View, StatusBar } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ItemsSeparator from "../components/ItemsSeparator";
import colors from "../colors/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const messages = [
  {
    id: 1,
    title: "Message 1",
    description: "Description 1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Message 2",
    description: "Description 2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Message 3",
    description: "Description 3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "Message 4",
    description: "Description 4",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 5,
    title: "Message 5",
    description: "Description 5",
    image: require("../assets/mosh.jpg"),
  },
];
const MessagesScreen = () => {
  const [msg, setMsg] = useState(messages);
  const [refreshing, setRefresing] = useState(false);

  function handleDelete(item: { id: number }) {
    setMsg(msg.filter((it) => it.id !== item.id));
    console.log("delected", item.id);
  }
  return (
    <Screen>
      <FlatList
        ItemSeparatorComponent={ItemsSeparator}
        data={msg}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log()}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMsg(messages);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
