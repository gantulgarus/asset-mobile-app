import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import Background from "../components/Background";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const icons = [
    { name: "search", label: "Дэд станц" },
    { name: "medkit", label: "ЦДАШ" },
    { name: "pulse", label: "Lorem ipsum dolor" },
    { name: "medkit-outline", label: "Lorem ipsum dolor" },
    { name: "nuclear", label: "Lorem ipsum dolor" },
    { name: "flask", label: "Lorem ipsum dolor" },
  ];

  return (
    <View style={styles.container}>
      {/* Category Grid */}
      <View style={styles.grid}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} style={styles.iconContainer}>
            <Ionicons name={icon.name} size={32} color="white" />
            <Text style={styles.iconLabel}>{icon.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: "30%",
    height: 250,
    aspectRatio: 1,
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  iconLabel: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  button: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 60,
    position: "absolute",
    bottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
