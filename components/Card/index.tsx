import { View } from "react-native";

export function Card({ children, styles }: any) {
  return <View style={styles}>{children}</View>;
}
