import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Custombutton } from "./components/Custombutton";

export function Screen({ theme }) {
  const [firstnumber, setFirstnumber] = useState("");
  const [secondnumber, setSecondnumber] = useState("");
  const [Operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleNumberPress = (buttonValue) => {
    if (
      firstnumber.length === 0 &&
      (buttonValue === "0" || buttonValue === "00")
    ) {
    } else {
      setFirstnumber(firstnumber + buttonValue);
      setResult("");
    }
  };
  const handleOperation = (buttonValue) => {
    setResult("");
    if (buttonValue === "+/-") {
      if (firstnumber > 0) setFirstnumber("-" + firstnumber);
      if (firstnumber < 0)
        setFirstnumber(firstnumber.slice(1, firstnumber.length));
    } else if (secondnumber.length === 0 && firstnumber.length === 0) {
    } else {
      setOperation(Operation + buttonValue);
      if (Operation.length === 0) {
        setSecondnumber(firstnumber);
        setFirstnumber("");
      }
      setOperation(buttonValue);
    }
  };
  const handleclear = () => {
    setFirstnumber("");
    setSecondnumber("");
    setOperation("");
    setResult("0");
  };
  const handleresult = () => {
    switch (Operation) {
      case "+":
        handleclear();
        setResult(parseInt(secondnumber) + parseInt(firstnumber));
        break;
      case "*":
        handleclear();
        setResult(parseInt(secondnumber) * parseInt(firstnumber));
        break;
      case "/":
        handleclear();
        setResult(parseInt(secondnumber) / parseInt(firstnumber));
        break;
      case "-":
        handleclear();
        setResult(parseInt(secondnumber) - parseInt(firstnumber));

        break;
      default:
        handleclear();
        setResult(0);
        break;
    }
  };

  return (
    <>
      <View style={[styles[`screen_${theme}`]]}>
        <Text style={[styles[`seceenText_${theme}`]]}>
          {secondnumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {" "}
            {Operation}{" "}
          </Text>

          {firstnumber}

          {result}
        </Text>
      </View>

      <View style={styles.keypad}>
        <View style={styles.row}>
          <Custombutton
            mode={theme}
            title={"C"}
            bgcolor={"gray"}
            onPress={() => handleclear()}
          />
          <Custombutton
            mode={theme}
            title={"+/-"}
            bgcolor={"gray"}
            onPress={() => handleOperation("+/-")}
          />
          <Custombutton
            mode={theme}
            title={"⌫"}
            bgcolor={"gray"}
            onPress={() => setFirstnumber(firstnumber.slice(0, -1))}
          />
          <Custombutton
            mode={theme}
            title={"÷"}
            bgcolor={"yellow"}
            onPress={() => handleOperation("/")}
          />
        </View>
        <View style={styles.row}>
          <Custombutton
            mode={theme}
            title={"7"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("7")}
          />
          <Custombutton
            mode={theme}
            title={"8"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("8")}
          />
          <Custombutton
            mode={theme}
            title={"9"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("9")}
          />
          <Custombutton
            mode={theme}
            title={"x"}
            bgcolor={"yellow"}
            onPress={() => handleOperation("*")}
          />
        </View>

        <View style={styles.row}>
          <Custombutton
            mode={theme}
            title={"4"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("4")}
          />
          <Custombutton
            mode={theme}
            title={"5"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("5")}
          />
          <Custombutton
            mode={theme}
            title={"6"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("6")}
          />
          <Custombutton
            mode={theme}
            title={"-"}
            bgcolor={"yellow"}
            onPress={() => handleOperation("-")}
          />
        </View>
        <View style={styles.row}>
          <Custombutton
            mode={theme}
            title={"1"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("1")}
          />
          <Custombutton
            mode={theme}
            title={"2"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("2")}
          />
          <Custombutton
            mode={theme}
            title={"3"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("3")}
          />
          <Custombutton
            mode={theme}
            title={"+"}
            bgcolor={"yellow"}
            onPress={() => handleOperation("+")}
          />
        </View>
        <View style={styles.row}>
          <Custombutton
            mode={theme}
            title={"0"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("0")}
          />
          <Custombutton
            mode={theme}
            title={"00"}
            bgcolor={"dark"}
            onPress={() => handleNumberPress("00")}
          />
          <Custombutton
            mode={theme}
            title={"."}
            bgcolor={"dark"}
            onPress={() => handleNumberPress(".")}
          />
          <Custombutton
            mode={theme}
            title={"="}
            bgcolor={"yellow"}
            onPress={() => handleresult()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen_dark: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "95%",
    height: "33%",
    color: "black",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 5,
  },
  screen_light: {
    backgroundColor: "black",
    borderRadius: 10,
    width: "95%",
    height: "33%",
    color: "white",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 5,
  },
  seceenText_dark: {
    fontSize: 45,
    color: "black",
  },

  seceenText_light: {
    fontSize: 45,
    color: "white",
  },

  keypad: {
    position: "absolute",
    bottom: 8,
  },
  row: {
    flexDirection: "row",
  },
});
