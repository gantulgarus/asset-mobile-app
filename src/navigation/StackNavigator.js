import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "Буцах",
      }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Техникийн мэдээллийн сан"
            component={TabNavigator}
          />
        </>
      ) : (
        <Stack.Screen
          name="Нэвтрэх"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StackNavigator;
