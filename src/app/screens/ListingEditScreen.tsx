import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/form";
import Screen from "../components/Screen";
import AppPicker from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
const categories = [
  { label: "Fournitures", value: 1, backgroundColor: "red", icon: "shoe-sneaker" },
  { label: "Habits", value: 2, backgroundColor: "green", icon: "apps" },
  { label: "Chaussures", value: 3, backgroundColor: "yellow", icon: "shoe-cleat" },
  { label: "Meubles", value: 4, backgroundColor: "purple", icon: "lock" },
  { label: "Electronique", value: 5, backgroundColor: "blue", icon: "tshirt-v-outline" },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().label("Price").min(1).max(10000),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const ListingEditScreen = () => {
  return (
    <Screen style={{ padding: 15 }}>
      <AppForm
        initialValues={{
          title: "okkkp",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name={"title"} placeholder="Title" maxLength={200} />
        <AppFormField
          name={"price"}
          maxLength={8}
          placeholder="Price"
          keyboardType="phone-pad"
          width={120}
        />
        <AppFormPicker
          name="category"
          placehoder="Category"
          items={categories}
          numberOfColumns={3}
          width={"50%"}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          name={"description"}
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
