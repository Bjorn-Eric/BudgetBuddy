import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Card, Icon, Input } from "@rneui/base";
import { primaryColor } from "../../conf/const";
import { Controller, useForm } from "react-hook-form";
import { ForgotPasswordScreenNavigationProp } from "./ForgotPasswordScreen.types";
import { styles } from "./ForgotPasswordScreen.styles";

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
