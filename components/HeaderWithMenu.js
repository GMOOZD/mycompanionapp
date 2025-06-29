import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderWithMenu({ title, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000010',
        padding: 16,
        paddingTop: 50, // espaciado para notch
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="#00ffaa" />
      </TouchableOpacity>
      <Text
        style={{
          color: '#00ffaa',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
}