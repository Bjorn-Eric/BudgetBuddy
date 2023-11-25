import { NavigationContainer } from "@react-navigation/native";
import { auth } from "./database/firebase.conf";
import { useEffect, useState } from "react";
import { Router } from "./router";
import store from "./store/store";
import { Provider } from "react-redux";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user != null);
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
