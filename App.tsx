import { StyleSheet } from "react-native";
import { ForgotPasswordScreen } from "./screens/ForgotPasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SignUpScreen } from "./screens/SignUpScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="loginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerBackTitle: "Back",
            headerTitle: "",
          }}
          name="forgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerBackTitle: "Back",
            headerTitle: "",
          }}
          name="signUpScreen"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
