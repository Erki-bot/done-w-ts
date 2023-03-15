import { StyleSheet, View, StatusBar } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import ListIconItem from "../components/ListIconItem";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";

const categories = [
  { label: "Fournitures", value: 1 },
  { label: "Habits", value: 2 },
  { label: "Chaussures", value: 3 },
  { label: "Meubles", value: 4 },
  { label: "Electronique", value: 5 },
];

const TestScreen = () => {
  const [selected, setSelected] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        items={categories}
        placeholder={"Category"}
        icon="apps"
        selected={selected}
        setSelected={setSelected}
      />
      <AppTextInput placeholder={"Email"} icon="email" />
    </Screen>
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
