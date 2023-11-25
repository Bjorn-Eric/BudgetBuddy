import { View } from "react-native";
import { styles } from "./HomeScreen.styles";
import { ref, set, push, get, remove } from "firebase/database";
import { RoundAddButton } from "../../components/RoundAddButton";
import { SummaryView } from "./components/SummaryView";
import { AccountView } from "./components/AccountView";
import { database } from "../../database/firebase.conf";
export function HomeScreen({ navigation }: any) {
  const dbRef = ref(database, "users/1");

  return (
    <View style={styles.container}>
      <SummaryView />
      <AccountView />
      <View style={styles.addButton}>
        <RoundAddButton onPress={() => console.log("Button pressed")} />
      </View>
    </View>
  );
}
