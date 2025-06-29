import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Pantallas
import DrawerMenu from './DrawerMenu';
import EventsScreen from '../screens/EventsScreen';
import ProfilesScreen from '../screens/ProfilesScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#a3e635',
          height: 65,
          borderTopColor: '#00ffaa',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarIcon: ({ focused }) => {
          let icon;

          switch (route.name) {
            case 'Inicio':
              icon = require('../assets/home-icon.png');
              break;
            case 'Eventos':
              icon = require('../assets/events-icon.png');
              break;
            case 'Perfil':
              icon = require('../assets/profile-icon.png');
              break;
            default:
              icon = require('../assets/logo.png');
              break;
          }

          return (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#000' : '#333',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#333',
      })}
    >
      <Tab.Screen name="Inicio" component={DrawerMenu} />
      <Tab.Screen name="Eventos" component={EventsScreen} />
      <Tab.Screen name="Perfil" component={ProfilesScreen} />
    </Tab.Navigator>
  );
}
