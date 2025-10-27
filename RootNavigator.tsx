import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Details: { itemId?: number; title?: string } | undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerTitle: 'RN Hybrid Navigation' }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} />
    </Drawer.Navigator>
  );
}