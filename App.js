import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MainTabs from './navigation/MainTabs';
import SeasonsScreen from './screens/SeasonsScreen';
import SeasonDetailScreen from './screens/SeasonDetailScreen';

import { CartProvider } from './context/CartContext';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      console.log(' Ejecutando en Android');
    } else {
      console.log(' Esta app está diseñada para Android, pero se está ejecutando en:', Platform.OS);
    }
  }, []);

  return (

    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="SeasonDetail" component={SeasonDetailScreen} />
          <Stack.Screen name="Seasons" component={SeasonsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
