import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../conf/const";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 15,
    alignItems: "center",
  },
  summaryContainer: {
    height: 150,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  summaryItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
