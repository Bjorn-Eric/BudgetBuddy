import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  summaryContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
  },
  summaryItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
