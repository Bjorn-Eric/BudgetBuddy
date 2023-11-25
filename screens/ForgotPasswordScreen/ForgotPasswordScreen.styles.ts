import { StyleSheet } from "react-native";
import { primaryColor } from "../../conf/const";

export const styles = StyleSheet.create({
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
