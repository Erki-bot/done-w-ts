import { TouchableHighlight } from "react-native";
import React from "react";
import colors from "../config/colors";

const TouchableIcon = (props: { onPress: () => void; children: any }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.lightGray2}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableHighlight>
  );
};

export default TouchableIcon;
