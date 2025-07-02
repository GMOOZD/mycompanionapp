import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CharactersScreen from '../screens/CharactersScreen';
import EpisodesScreen from '../screens/EpisodesScreen';
import GamesScreen from '../screens/GamesScreen';
import PersonajesScreen from '../screens/PersonajesScreen';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#000010',
        },
        drawerActiveTintColor: '#00ffaa',
        drawerInactiveTintColor: '#aaa',
        headerStyle: {
          backgroundColor: '#000010',
        },
        headerTintColor: '#00ffaa',
      }}
    >
      <Drawer.Screen
        name="Bienvenido"
        component={CharactersScreen}
        options={{ title: 'Bienvenido' }}
      />
      <Drawer.Screen
        name="Episodios"
        component={EpisodesScreen}
        options={{ title: 'EPISODIOS' }} // ✅ Este mostrará el menú automáticamente
      />
      <Drawer.Screen
        name="Juegos"
        component={GamesScreen}
        options={{ title: 'JUEGOS' }}
      />
      <Drawer.Screen
        name="Personajes"
        component={PersonajesScreen}
        options={{ title: 'PERSONAJES' }}
      />
    </Drawer.Navigator>
  );
}
