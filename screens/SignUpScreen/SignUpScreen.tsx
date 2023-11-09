import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Card, Icon, Input } from "@rneui/base";
import { primaryColor } from "../../conf/const";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormData, SignUpScreenProp } from "./SignUpScreen.types";

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

  const onSubmit = (props: SignUpFormData) => {
    console.log(props);
    // auth()
    //   .createUserWithEmailAndPassword(props.email, props.password)
    //   .then(() => {
    //     console.log("User account created & signed in!");
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       console.log("That email address is already in use!");
    //     }
    //
    //     if (error.code === "auth/invalid-email") {
    //       console.log("That email address is invalid!");
    //     }
    //
    //     console.error(error);
    //   });
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
