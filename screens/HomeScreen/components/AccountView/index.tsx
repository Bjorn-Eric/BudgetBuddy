import { View, Text } from "react-native";
import { AccountViewProps } from "./AccountView.types";
import { styles } from "./AccountView.styles";

export function AccountView({ accounts }: AccountViewProps) {
  return (
    <View style={styles.root}>
      <View style={styles.summaryContainer}>
        <Text style={styles.title}>Your accounts</Text>
      </View>
    </View>
  );
}
