import { View, Text } from "react-native";
import { AccountViewProps } from "./AccountViewItem.types";
import { styles } from "./AccountViewItem.styles";

export function AccountViewItem({ title, amount }: AccountViewProps) {
  return (
    <View style={styles.root}>
      <Text></Text>
    </View>
  );
}
