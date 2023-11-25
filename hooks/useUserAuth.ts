import { LoginFormData } from "../screens/LoginScreen/LoginScreen.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase.conf";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/slices/userSlice";
import { ToastAndroid } from "react-native";

export function useUserAuth() {
  const dispatch = useDispatch();
  function signIn({ username, password }: LoginFormData) {
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        console.log("Current user: ", auth.currentUser);
        dispatch(login({ payload: auth.currentUser }));
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

  // TODO: Think of better naming convention for this function
  function signOut() {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
        dispatch(logout());
        ToastAndroid.show("Signed out", ToastAndroid.SHORT);
        return true;
      })
      .catch((error) => {
        console.error(error);
        ToastAndroid.show("Error signing out", ToastAndroid.SHORT);
        return null;
      });
  }

  return {
    signIn,
    signOut,
  };
}
