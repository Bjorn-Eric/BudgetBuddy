import { summaryProps } from "./SummaryView.types";
import { styles } from "./SummaryView.styles";
import { View, Text } from "react-native";
import { Card } from "@rneui/base";

export function SummaryView({
  balance = 0,
  income = 0,
  expense = 0,
  currency = "€",
}: summaryProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text>BALANCE</Text>
          <Text>
            {balance} {currency}
          </Text>
        </View>
        <View style={styles.summaryItem}>
          <Text>INCOME</Text>
          <Text>
            {income} {currency}
          </Text>
        </View>
        <View style={styles.summaryItem}>
          <Text>EXPENSES</Text>
          <Text>
            {expense} {currency}
          </Text>
        </View>
      </View>
    </View>
  );
}
