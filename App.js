import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.Contain}>
        <Text>Hello Ahmed</Text>
        <Text>Hello Ahmed</Text>
        <Text>Hello Ahmed</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Contain: {
    marginTop: 200,
    flex: 100,
    backgroundColor: 'blue'
  }
});
