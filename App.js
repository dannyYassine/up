import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/components/WelcomeView';
import { AppPresenter } from './src/presenters/AppPresenter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterProjectKeyView from './src/components/EnterProjectKeyView';

const Stack = createNativeStackNavigator();

export default function App() {
  const [renderList, setRenderList] = useState(false);
  const presenter = new AppPresenter({
    updateRenderList: () => {
      setRenderList(!renderList);
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={EnterProjectKeyView} options={{ headerShown: false }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
