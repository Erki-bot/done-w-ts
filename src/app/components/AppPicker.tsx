import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../config/colors";
import Icon from "./Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/style";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
let minHeight = 25;
let maxHeight = 30;
type Item = {
  label: string;
  value: number;
};
type PropsType = {
  icon?: string;
  placeholder: string;
  selected: Item;
  items: Item[];
  setSelected: (item: Item) => void;
};
const AppPicker = ({
  icon,
  placeholder,
  items,
  selected,
  setSelected,
  ...otherProps
}: PropsType) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && <Icon name={icon} size={20} style={styles.icon} />}
          <AppText style={[defaultStyle.text, styles.text]}>
            {selected ? selected.label : placeholder}
          </AppText>
          <Icon name={"chevron-down"} size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="fade">
        <Screen>
          <Button
            title="close"
            onPress={() => setModalVisible(!modalVisible)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  setSelected(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.backGray,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: 10,
    padding: 15,
  },
  icContainer: {
    position: "relative",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  modal: {
    marginTop: 100,
    backgroundColor: "black",
  },
});
