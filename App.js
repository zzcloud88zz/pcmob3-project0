import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const name = ["Adam", "Bob", "Claire", "Dinah"];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{name[0]}</Text>
      <Text>{name[1]}</Text>
      <Text>{name[2]}</Text>
      <Text>{name[3]}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
