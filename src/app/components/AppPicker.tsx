import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import Icon from "./Icon";

import defaultStyle from "../config/style";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import { useFormikContext } from "formik";
type Item = {
  label: string;
  value: number;
};
type PropsType = {
  icon?: string;
  placeholder: string;
  selected: Item;
  PickerItemComponent?: any;
  width?: string | number;
  items: Item[];
  numberOfColumns : number
  setSelected: (item: Item) => void;
};
const AppPicker = ({
  icon,
  placeholder,
  items,
  numberOfColumns = 1,
  selected,
  setSelected,
  PickerItemComponent = PickerItem,
  width = "100%",
}: PropsType) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={[styles.container, { width }]}>
          {icon && <Icon name={icon} size={20} style={styles.icon} />}
          {selected ? (
            <AppText style={[defaultStyle.text, styles.text]}>
              {selected.label}
            </AppText>
          ) : (
            <AppText style={[defaultStyle.text, styles.placeholder]}>
              {placeholder}
            </AppText>
          )}

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
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
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
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
  container: {
    backgroundColor: colors.backGray,
    alignItems: "center",
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
