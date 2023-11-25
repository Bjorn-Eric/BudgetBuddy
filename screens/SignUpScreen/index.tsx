import React from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { Button, Card, Icon, Input } from "@rneui/base";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormData, SignUpScreenProp } from "./SignUpScreen.types";
import { styles } from "./SignUpScreen.styles";
import { createUser } from "../../database/functions/user/createUser";

export function SignUpScreen({ navigation }: SignUpScreenProp) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }: SignUpFormData) => {
    if (email === "" || password === "") {
      console.log("Email or password is empty");
      Alert.alert("Check your email or password");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      Alert.alert("Passwords do not match");
      return;
    }

    createUser({ firstName, lastName, email, password })
      .then((user) => {
        console.log("User created successfully");
      })
      .catch((error) => {
        console.log("Error creating user: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Card containerStyle={styles.card}>
        <View style={styles.inputContainer}>
          <ScrollView>
            <Controller
              render={({ field }) => (
                <Input
                  style={styles.input}
                  placeholder="First Name"
                  onChangeText={field.onChange}
                  value={field.value}
                  leftIcon={<Icon type="font-awesome-5" name="user" />}
                />
              )}
              control={control}
              name="firstName"
            />
            <Controller
              render={({ field }) => (
                <Input
                  style={styles.input}
                  placeholder="Last Name"
                  onChangeText={field.onChange}
                  value={field.value}
                  leftIcon={<Icon type="font-awesome-5" name="user" />}
                />
              )}
              control={control}
              name="lastName"
            />
            <Controller
              render={({ field }) => (
                <Input
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  onChangeText={field.onChange}
                  value={field.value}
                  leftIcon={<Icon type="font-awesome-5" name="at" />}
                />
              )}
              control={control}
              name="email"
            />
            <Controller
              render={({ field }) => (
                <Input
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  leftIcon={<Icon type="font-awesome-5" name="lock" />}
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
              control={control}
              name="password"
            />
            <Controller
              render={({ field }) => (
                <Input
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  leftIcon={<Icon type="font-awesome-5" name="lock" />}
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
              control={control}
              name="confirmPassword"
            />
          </ScrollView>
        </View>
        <Button
          buttonStyle={styles.loginButton}
          onPress={handleSubmit(onSubmit)}
        >
          Register
        </Button>
      </Card>
    </View>
  );
}
