import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import Facto from "./Ferma.js";

export default function App() {
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введіть число"
        onChangeText={(numb) => {
          setData(numb);
          keyboardType = "numeric";
          console.log(data);
        }}
      />
      <View style = {styles.btn}>
      <Button
        title="Enter"
        color="black"
        onPress={() => {
          setRes(Facto(data));
        }}
        style={{height:50}}
      />
      </View>
      <Text style={styles.expression}> {res && `${res.x} *  ${res.y}`}</Text>
      <Text> </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 12,
    marginBottom: 20,
  },
  btn: {
    marginTop: 10,
    width: 90,
    height: 40,
    borderRadius: 10,
    backgroundColor:"lightblue",
  
  },
  expression: {
    marginTop: 10,
    fontSize: 15,
  },
});

// const p = new Promise((res,rej)=>{
//   console.log('dsds');
//   res()

// })
// p.then((data)=>)
