import React from "react";
import { LoginNavigator } from "./navigators/LoginNavigator/LoginNavigator";
import { MainNavigator } from "./navigators/MainNavigator/MainNavigator";
import { useSelector } from "react-redux";
import { selectUser } from "../store/selectors/userSelectors";

// TODO: Make it check from the store
export function Router() {
  const { user } = useSelector(selectUser);

  if (!user) {
    return <LoginNavigator />;
  }

  return <MainNavigator />;
}
