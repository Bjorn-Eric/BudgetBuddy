import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Card, Icon, Input } from "@rneui/base";
import { primaryColor } from "../../conf/const";
import { Controller, useForm } from "react-hook-form";
import { LoginFormData, LoginScreenProps } from "./LoginScreen.types";

export function LoginScreen({ navigation }: LoginScreenProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = ({ username, password }: LoginFormData) => {
    if (username === "" || password === "") {
      Alert.alert("Check that you filled all the fields");
      return;
    }
  };

  const onCreateAccountPress = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Card containerStyle={styles.card}>
        <View style={styles.inputContainer}>
          <Controller
            render={({ field }) => (
              <Input
                label="Username"
                style={styles.input}
                placeholder="Username"
                onChangeText={field.onChange}
                value={field.value}
                leftIcon={<Icon type="font-awesome-5" name="user" />}
              />
            )}
            control={control}
            name="username"
          />
          <Controller
            render={({ field }) => (
              <Input
                label="Password"
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
          <Text
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("forgotPasswordScreen")}
          >
            Forgot your password?
          </Text>
        </View>
        <Button
          buttonStyle={styles.loginButton}
          onPress={handleSubmit(onSubmit)}
        >
          Login
        </Button>
        <Text style={{ alignSelf: "center" }}>
          Don't have an account?{" "}
          <Text
            style={{ color: primaryColor }}
            onPress={() => navigation.navigate("signUpScreen")}
          >
            Sign up here
          </Text>
        </Text>
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
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
  },
  card: {
    width: "100%",
    minHeight: "50%",
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
