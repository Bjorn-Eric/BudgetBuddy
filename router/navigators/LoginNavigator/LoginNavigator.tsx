import { LoginScreen } from "../../../screens/LoginScreen";
import { ForgotPasswordScreen } from "../../../screens/ForgotPasswordScreen";
import { SignUpScreen } from "../../../screens/SignUpScreen";
import { createStackNavigator } from "@react-navigation/stack";

export function LoginNavigator() {
  const LoginStack = createStackNavigator();

  return (
    <LoginStack.Navigator initialRouteName="loginScreen">
      <LoginStack.Screen
        options={{ headerShown: false }}
        name="loginScreen"
        component={LoginScreen}
      />
      <LoginStack.Screen
        options={{
          headerBackTitle: "Back",
          headerTitle: "",
        }}
        name="forgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <LoginStack.Screen
        options={{
          headerBackTitle: "Back",
          headerTitle: "",
        }}
        name="signUpScreen"
        component={SignUpScreen}
      />
    </LoginStack.Navigator>
  );
}
