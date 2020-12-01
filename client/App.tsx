import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to POTHOS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f5850',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 28,
  }
});
