import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Custombutton({ title, mode, bgcolor, onPress }) {
  return (
    <View style={mode === "light" ? styles.l_container : styles.d_container}>
      <TouchableOpacity style={[styles[`btn_${bgcolor}`]]} onPress={onPress}>
        <Text style={styles.btnText}> {title} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  l_container: {
    backgroundColor: "#0b96e0",
    alignItems: "center",
  },
  d_container: {
    backgroundColor: "#141a24",
    alignItems: "center",
  },
  btn_yellow: {
    backgroundColor: "#ad7e31",
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    width: 80,
    borderRadius: 40,
    margin: 3,
    fontSize: 3,
  },
  btn_gray: {
    backgroundColor: "#747477",
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    width: 80,
    margin: 3,
    borderRadius: 40,
    fontSize: 3,
  },
  btn_dark: {
    backgroundColor: "#2E2F38",
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    width: 80,
    margin: 3,
    borderRadius: 40,
    fontSize: 3,
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
});
