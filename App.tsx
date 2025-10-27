import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    primary: '#0a8b6f',
    text: '#233239',
    card: '#f4f7f6',
    border: '#d9e3df',
    notification: '#0a8b6f',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}