import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AppPresenter } from './AppPresenter';

export default function App() {
  const [text, setText] = useState('');

  const presenter = new AppPresenter({
    updateText: (label) => {
      setText(label);
    }
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Let's do this!</Text>
      <Button title="Let's go!" onPress={() => presenter.onButtonPressed()}/>

      <Text>{text}</Text>
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
