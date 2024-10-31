import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import HomeScreen from "../screens/HomeScreen";
import PowerlineScreen from "../screens/PowerlineScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StationScreen from "../screens/StationScreen";
import ContactScreen from "../screens/ContactScreen";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerShown: false,
  //   tabBarShowLabel: false,
  tabBarActiveTintColor: "#3730a3",
  tabBarStyle: {
    paddingTop: 5, // Add top padding here
    paddingBottom: 20, // Optional: adjust bottom padding if needed
    height: 70,
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Нүүр",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StationScreen"
        component={StationScreen}
        options={{
          tabBarLabel: "Дэд станц",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/electric-factory.png")} // Path to your custom PNG icon
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PowerlineScreen"
        component={PowerlineScreen}
        options={{
          tabBarLabel: "ЦДАШ",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/tower.png")} // Path to your custom PNG icon
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarLabel: "Ажилчид",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Профайл",
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
