import { primaryColor } from "../../../conf/const";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Icon } from "@fortawesome/fontawesome-svg-core";

// TODO: Figure out how to use FontAwesomeIcon in DrawerNavigator
export const mainNavigatorStyles: DrawerNavigationOptions = {
  headerShown: true,
  headerTitleAlign: "left",
  headerTitleStyle: {
    color: "#fff",
  },
  headerStyle: {
    backgroundColor: primaryColor,
  },
};

export const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    height: 150,
    padding: 10,
    backgroundColor: primaryColor,
  },
});
