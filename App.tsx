import React from "react";
import { View, Text } from "react-native";
import ListIconItem from "./src/app/components/ListIconItem";
import ListingDetailScreen from "./src/app/screens/ListingDetailScreen";
import MessagesScreen from "./src/app/screens/MessagesScreen";
import ViewImageScreen from "./src/app/screens/ViewImageScreen";
import Screen from "./src/app/components/Screen";
import TestScreen from "./src/app/screens/TestScreen";
import MyAccountScreen from "./src/app/screens/MyAccountScreen";
import ListingScreen from "./src/app/screens/ListingScreen";
import LoginScreen from "./src/app/screens/LoginScreen";
import RegisterScreen from "./src/app/screens/RegisterScreen";
import ListingEditScreen from "./src/app/screens/ListingEditScreen";
import TestUserPermission from "./src/learning/TestUserPermission";
export default function App() {
  return <TestUserPermission />;
}
/*
<ListingDetailScreen 
title = "Titre"
subTitle = "Description"
image = {require('./src/app/assets/jacket.jpg')}
user = {
   { name :"KIKI",
    description :'Eric'}
  }/>
  {/* <Text style={{ fontFamily: "normal" }}> normal </Text>
  
  />
      <Text style={{ fontFamily: "notoserif" }}> notoserif </Text>
      <Text style={{ fontFamily: "sans-serif" }}> sans-serif </Text>
      <Text style={{ fontFamily: "sans-serif-light" }}> sans-serif-light </Text>
      <Text style={{ fontFamily: "sans-serif-thin" }}> sans-serif-thin </Text>
      <Text style={{ fontFamily: "sans-serif-condensed" }}>
        {" "}
        sans-serif-condensed{" "}
      </Text>
      <Text style={{ fontFamily: "sans-serif-medium" }}>
        {" "}
        sans-serif-medium{" "}
      </Text>
      <Text style={{ fontFamily: "serif" }}> serif </Text>
      <Text style={{ fontFamily: "Roboto" }}> Roboto </Text>
      <Text style={{ fontFamily: "monospace" }}> monospace </Text> }
*/
