import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import Genetic from './Genetic'

export default function App() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [c, setC] = useState(null);
  const [d, setD] = useState(null);
  const [y, setY] = useState(null);
  const [result, setResult] = useState('[]');

  return (
    <SafeAreaView>
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
        {`[x1, x2, x3, x4] = ${result}`}
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
    top: 250,
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
    top: 269,
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
    top: 300,
    height: 50,
    width: 150,
    backgroundColor: 'green',
  },
});