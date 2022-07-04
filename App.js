import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, onPress, View } from "react-native";

import { Switch } from "react-native";
import { Custombutton } from "./src/components/Custombutton";
import { Screen } from "./src/screen";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <View style={theme === "light" ? styles.lightTheme : styles.darkTheme}>
      <Switch
        value={theme === "light"}
        onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <Screen theme={theme} />
    </View>
  );
}

const styles = StyleSheet.create({
  lightTheme: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#0b96e0",
    alignItems: "center",
  },
  darkTheme: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#141a24",
    alignItems: "center",
  },
});
