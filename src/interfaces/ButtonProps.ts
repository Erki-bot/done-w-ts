import { GestureResponderEvent } from "react-native/types";

export interface ButtonProps {
    title: string;
    onPress: (event : GestureResponderEvent)=>void
    color? : string
  }