import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AppPresenter } from './src/presenters/AppPresenter';
import ProjectList from './src/components/ProjectList';

export default function App() {
  const [renderList, setRenderList] = useState(false);
  const presenter = new AppPresenter({
    updateRenderList: () => {
      setRenderList(!renderList);
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <Text>Services on your Render dashboard</Text>
        <Button title="Start" onPress={() => presenter.onButtonPressed()} />
      </View>
      {renderList && (
        <View style={styles.list}>
          <ProjectList />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    flex: 3
  }
});
