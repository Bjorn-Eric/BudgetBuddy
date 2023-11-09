import { Icon, Input } from "@rneui/base";
import { Controller } from "react-hook-form";
import React from "react";
import { TextInputProps } from "./TextInput.types";
import { StyleSheet } from "react-native";

export function TextInput({
  formProps,
  placeholder,
  name,
  className,
  icon,
  secureTextEntry,
  disabled,
  label = "",
  keyboardType = "default",
}: TextInputProps) {
  const { control } = formProps;
  return (
    <Controller
      render={({ field }) => (
        <Input
          disabled={disabled}
          label={label}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder || ""}
          keyboardType={keyboardType}
          leftIcon={
            icon ? <Icon type="font-awesome-5" name={icon} /> : undefined
          }
          onChangeText={field.onChange}
          value={field.value}
        />
      )}
      control={control}
      name={name}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
});
