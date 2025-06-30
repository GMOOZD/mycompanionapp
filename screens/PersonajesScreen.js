import React from 'react';
import { View, Text, Image, FlatList, Pressable, Linking, StyleSheet } from 'react-native';

const Personajes = [
  {
    nombre: "Rick Sánchez",
    descripcion: "Un científico alcohólico y genio, siempre metido en problemas interdimensionales.",
    imagen: { uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" },
    url: "https://rickandmorty.fandom.com/wiki/Rick_Sanchez"
  },
  {
    nombre: "Morty Smith",
    descripcion: "Nieto de Rick, nervioso pero de buen corazón, acompaña a su abuelo en aventuras.",
    imagen: { uri: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" },
    url: "https://rickandmorty.fandom.com/wiki/Morty_Smith"
  },
  // ...otros personajes igual
];

export default function PersonajesScreen() {
  const openLink = (url) => Linking.openURL(url);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => openLink(item.url)}
      style={styles.card}
    >
      <Image source={item.imagen} style={styles.img} resizeMode="cover" />
      <Text style={styles.title}>{item.nombre}</Text>
      <Text style={styles.description}>{item.descripcion}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personajes Rick and Morty</Text>
      <FlatList
        data={Personajes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#000010' },
  header: {
    color: '#00ffaa',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#00ffaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
  },
  card: {
    backgroundColor: '#080339',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#00ffaa',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center'
  },
  img: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10
  },
  
  title: {
    color: '#00ffcc',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  description: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center'
  }
});
