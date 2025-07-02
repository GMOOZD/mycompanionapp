import React, { useState } from 'react';
import { View, Text, Image, FlatList, Pressable, Linking, StyleSheet } from 'react-native';

const games = [
  {
    title: "Elastic Man",
    url: "https://gamaverse.com/elastic-man-game/",
    description: "Estira la cara de Morty de forma infinita.",
    imagen: require('../assets/010.png'),
  },
  {
    title: "Rick and Morty: RAM Old School",
    url: "https://judgeking.itch.io/ram-old-school",
    description: "Una aventura retro estilo arcade con Rick y Morty.",
    imagen: require('../assets/020.png'),
  },
  
];

export default function GamesScreen() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => openLink(item.url)}
      onHoverIn={() => setHoverIndex(index)}
      onHoverOut={() => setHoverIndex(null)}
      style={[
        styles.card,
        hoverIndex === index && styles.cardHover
      ]}
    >
      <Image source={item.imagen} style={styles.img} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Juegos Rick and Morty</Text>
      <FlatList
        data={games}
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
  cardHover: {
    shadowOpacity: 0.9,
    transform: [{ scale: 1.05 }]
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
