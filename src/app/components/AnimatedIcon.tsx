import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Icon from "./Icon";
type PropsType = {
  icon: string;
  minHeight?: number;
  maxHeight?: number;
  period?: number;
  step?: number;
};
const AnimatedIcon = ({
  icon,
  minHeight = 25,
  maxHeight = 30,
  period = 50,
  step = 0.2,
}: PropsType) => {
  const [size, setSize] = useState(maxHeight);
  const [pos, setPos] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSize((s) => {
        if (pos) {
          return s + step;
        } else {
          return s - step;
        }
      });
      size > maxHeight ? setPos(false) : size < minHeight ? setPos(true) : null;
    }, period);
  }, [size]);
  return (
    <View style={styles.icContainer}>
      <Icon name={icon} size={size} />
    </View>
  );
};

export default AnimatedIcon;

const styles = StyleSheet.create({
  icContainer: {
    position: "relative",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
