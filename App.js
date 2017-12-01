/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, Button, View, TextInput } from "react-native";

const App = () => (
  <View>
    <Button onPress={() => console.log("Clicked!")} title="Click me" />
    <TextInput placeholder="Input" />
  </View>
);

export default App;
