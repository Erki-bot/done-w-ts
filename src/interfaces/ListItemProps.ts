import { FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native/types";

export interface ListItemProps {
  title: string;
  subTitle: string;
  image: any;
  onPress: (event: GestureResponderEvent) => void;
  renderRightActions?: FunctionComponent;
}
