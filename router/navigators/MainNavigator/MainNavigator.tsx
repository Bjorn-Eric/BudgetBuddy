import React from "react";
import { HomeScreen } from "../../../screens/HomeScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { mainNavigatorStyles } from "./MainNavigator.styles";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./MainNavigator.styles";
import { Icon } from "@rneui/base";
import { useUserAuth } from "../../../hooks/useUserAuth";
import { TransactionsScreen } from "../../../screens/TransactionsScreen";
import { StatisticsScreen } from "../../../screens/StatisticsScreen";
import { LoanScreen } from "../../../screens/LoanScreen";
import { CurrencyScreen } from "../../../screens/CurrencyScreen";

function ProfileSection(props: any) {
  const { signOut } = useUserAuth();

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity style={styles.profileContainer}>
        <Text>Test</Text>
      </TouchableOpacity>
      <View style={{ justifyContent: "space-between" }}>
        <View>
          <DrawerItemList {...props} />
        </View>
        <View>
          <DrawerItem
            label="logout"
            icon={() => <Icon name="logout" />}
            style={{ position: "relative", top: 10 }}
            onPress={() => {
              Alert.alert("Logout", "Are you sure you want to logout?", [
                { text: "Cancel", onPress: () => {} },
                {
                  text: "Logout",
                  onPress: () => {
                    signOut();
                  },
                },
              ]);
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export function MainNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        ...mainNavigatorStyles,
        headerLeft: () => (
          <Icon
            name="menu"
            color="#FFF"
            style={{ paddingLeft: 10 }}
            onPress={navigation.toggleDrawer}
          />
        ),
      })}
      drawerContent={(props) => ProfileSection(props)}
    >
      <Drawer.Screen
        options={{ headerShown: true }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{ headerShown: true }}
        name="Transactions"
        component={TransactionsScreen}
      />
      <Drawer.Screen
        options={{ headerShown: true }}
        name="Statistics"
        component={StatisticsScreen}
      />
      <Drawer.Screen
        options={{ headerShown: true }}
        name="Loans"
        component={LoanScreen}
      />
      <Drawer.Screen
        options={{ headerShown: true }}
        name="Currency Converter"
        component={CurrencyScreen}
      />
    </Drawer.Navigator>
  );
}
