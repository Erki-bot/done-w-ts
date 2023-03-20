import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { FormikErrors, useFormikContext } from "formik";

const AppFormPicker = ({
  name,
  placehoder,
  items,
  width,
  PickerItemComponent,
  numberOfColumns
}) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        placeholder={placehoder}
        items={items}
        setSelected={(item: any) => setFieldValue(name, item)}
        selected={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns = {numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
