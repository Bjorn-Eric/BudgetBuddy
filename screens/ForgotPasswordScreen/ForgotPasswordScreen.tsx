import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Card, Icon, Input } from "@rneui/base";
import { primaryColor } from "../../conf/const";
import { Controller, useForm } from "react-hook-form";
import { ForgotPasswordScreenNavigationProp } from "./ForgotPasswordScreen.types";

export function ForgotPasswordScreen() {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = ({ email }: ForgotPasswordScreenNavigationProp) => {
    if (email === "") {
      Alert.alert("Check that you filled all the fields");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Don't you worry!</Text>
      <Text style={styles.subTitle}>We will sort this out in no time!</Text>
      <Card containerStyle={styles.card}>
        <View style={styles.inputContainer}>
          <Controller
            render={({ field }) => (
              <Input
                label="Email"
                style={styles.input}
                placeholder="email"
                onChangeText={field.onChange}
                value={field.value}
                leftIcon={<Icon type="font-awesome-5" name="envelope" />}
              />
            )}
            control={control}
            name="email"
          />
        </View>
        <Button
          buttonStyle={styles.loginButton}
          onPress={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColor,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
  },
  subTitle: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
  },
  card: {
    width: "100%",
    minHeight: "30%",
    borderRadius: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 35,
  },
  forgotPassword: {
    color: primaryColor,
  },
  loginButton: {
    borderRadius: 8,
    height: 50,
    marginBottom: 40,
  },
  input: {
    marginVertical: 15,
  },
});
