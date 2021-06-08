import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import Genetic from './Genetic'
import RNPickerSelect from "react-native-picker-select";

export default function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [d, setD] = useState(null);
  const [y, setY] = useState(null);
  const [result, setResult] = useState('[]');

  return (
    <SafeAreaView>
      <RNPickerSelect
            style={pickerSelectStyles}
            placeholder={{ label: "Size of population", value: null }}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
            ]}
        />
      
      <View style={styles.container}>
        <TextInput style={styles.expression}
          onChangeText={setA}
          value={a}
          placeholder="A"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x1 + '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setB}
          value={b}
          placeholder="B"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x2 + '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setC}
          value={c}
          placeholder="C"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x3 + '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setD}
          value={d}
          placeholder="D"
          keyboardType="numeric"
        />
        <Text style={styles.expression}>{'*x4 = '}</Text>
        <TextInput style={styles.expression}
          onChangeText={setY}
          value={y}
          placeholder="Y"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.result}>
        {`[x1, x2, x3, x4] = [1, 2, 2, 2]`}
      </Text>
      <View style={styles.btn}>
        <Button
          title="Calculate"
          color="#fff"
          onPress={() => setResult(new Genetic([a, b, c, d], y).solve())}
        />
      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '90%',
    top: 150,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expression: {
    fontSize: 24
  },
  result: {
    alignSelf: 'center',
    top: 160,
    fontSize: 25
  },
  time: {
    alignSelf: 'center',
    top: 320,
    fontSize: 22
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 170,
    height: 50,
    width: 120,
    backgroundColor: 'green',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    top: 110,
    width: "54%",
    alignSelf: "center",
    marginVertical: 30,
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 6,
    color: "black",
  },
  inputAndroid: {},
});