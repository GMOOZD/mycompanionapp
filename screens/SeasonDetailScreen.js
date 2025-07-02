// screens/SeasonDetailScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function SeasonDetailScreen({ route }) {
  const { season_number, episodes } = route.params;

  // Función para simular una compra
  const handleBuy = (episode) => {
    Alert.alert(
      'Compra Exitosa',
      `Has comprado el episodio "${episode.title}" por $${episode.price.toFixed(2)}.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temporada {season_number}</Text>
      <FlatList
        data={episodes}
        keyExtractor={(item) => item.episode_number.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.episodeTitle}>
              Episodio {item.episode_number}: {item.title}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>Precio: ${item.price.toFixed(2)}</Text>

            <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(item)}>
              <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000010', padding: 16 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ffaa',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  episodeTitle: { fontSize: 18, color: '#fff', marginBottom: 4 },
  description: { fontSize: 14, color: '#ccc', marginBottom: 4 },
  price: { fontSize: 14, color: '#00ffaa', marginBottom: 8 },
  buyButton: {
    backgroundColor: '#00ffaa',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#000010',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
