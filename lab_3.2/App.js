import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Perceptron from "./Perceptron";

export default function App() {
  const [learningRate, setLearningRate] = useState(0.001);
  const [deadline, setDeadline] = useState(1000);
  const [result, setResult] = useState();
  const [time, setTime] = useState();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setLearningRate(value)}
        placeholder={{ label: "Choose the learning speed", value: null }}
        items={[
          { label: "0.001", value: 0.001 },
          { label: "0.01", value: 0.01 },
          { label: "0.05", value: 0.05 },
          { label: "0.1", value: 0.1 },
          { label: "0.2", value: 0.2 },
        ]}
      />
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setDeadline(value)}
        placeholder={{ label: "Choose the deadline", value: null }}
        items={[
          { label: "1000", value: 1000 },
          { label: "2000", value: 2000 },
          { label: "3000", value: 3000 },
        ]}
      />
      {<Text style={styles.result}>{[result, time]}</Text>}
      <View style={styles.btn}>
        <Button
          buttonStyle={{ backgroundColor: "black" }}
          color="white"
          title="Learn"
          onPress={() => {
            const p = new Perceptron({ threshold: 4, learningRate });
            let start = performance.now();
            const result = p.learn(
              [
                [0, 6],
                [3, 3],
                [1, 5],
                [2, 4],
              ],
              deadline
            );

            let end = performance.now();
            const diff = end - start;
            setTime(() => {
              `\nTime= ${diff}`;
            });

            diff > deadline
              ? alert("deadline exposed")
              : setResult(`${result}`);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  result: {
    top: 100,
    lineHeight: 30,
    alignSelf: "center",
    fontSize: 16,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: 200,
    height: 50,
    width: 150,
    backgroundColor: "black",
    borderRadius: 50,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    top: 20,
    width: "90%",
    alignSelf: "center",
    marginVertical: 30,
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: "blue",
    borderRadius: 6,
    color: "black",
  },
  inputAndroid: {},
});
