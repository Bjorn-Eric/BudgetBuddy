import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Card, Icon, Input } from "@rneui/base";
import { primaryColor } from "../../conf/const";
import { Controller, useForm } from "react-hook-form";
import { LoginFormData, LoginScreenProps } from "./LoginScreen.types";
import { auth } from "../../database/firebase.conf";
import { signInWithEmailAndPassword } from "firebase/auth";
import { styles } from "./LoginScreen.styles";
import { login } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export function LoginScreen({ navigation }: LoginScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "bjorn.umera@gmail.com",
      password: "Kalapole22",
    },
  });

  const dispatch = useDispatch();

  const onSubmit = ({ username, password }: LoginFormData) => {
    if (username === "" || password === "") {
      Alert.alert("Check that you filled all the fields");
      return;
    }
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        console.log("Current user: ", auth.currentUser);
        dispatch(
          login({
            email: auth.currentUser?.email,
            uid: auth.currentUser?.uid,
          }),
        );
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          Alert.alert("Error", "Check your email address");
        }
        if (error.code === "auth/invalid-login-credentials") {
          Alert.alert("Error", "Please check your credentials");
        }
        console.error(error);
      });
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
                // label="Username"
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                onChangeText={field.onChange}
                value={field.value}
                errorMessage={errors.username?.message}
                leftIcon={<Icon type="font-awesome-5" name="user" />}
              />
            )}
            control={control}
            name="username"
            rules={{
              required: { value: true, message: "Username is required" },
            }}
          />
          <Controller
            render={({ field }) => (
              <Input
                // label="Password"
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                placeholder="Password"
                errorMessage={errors.password?.message}
                leftIcon={<Icon type="font-awesome-5" name="lock" />}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            control={control}
            name="password"
            rules={{
              required: { value: true, message: "Password is required" },
            }}
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
