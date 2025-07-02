// screens/EpisodesScreen.js 
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function EpisodesScreen({ route }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonId } = route?.params || {};

  useEffect(() => {
    const apiUrl = seasonId
      ? `https://mock.apidog.com/m1/912109-894454-default/seasons/${seasonId}/episodes`
      : 'https://mock.apidog.com/m1/912109-894454-default/episodes';

    axios.get(apiUrl)
      .then(response => {
        setEpisodes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los episodios:", error);
        setLoading(false);
      });
  }, [seasonId]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#a3e635" />
        <Text style={styles.loadingText}>Cargando episodios...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Episodios {seasonId ? `de Temporada ${seasonId}` : ''}</Text>
      {episodes.length === 0 ? (
        <Text style={styles.noDataText}>No se encontraron episodios.</Text>
      ) : (
        <FlatList
          data={episodes}
          keyExtractor={(item) => item.episode_number?.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Episodio {item.episode_number}: {item.title}</Text>
              <Text style={styles.cardText}>{item.description}</Text>
              <Text style={styles.cardText}>Precio: ${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111',
  },
  title: {
    color: '#a3e635',
    fontSize: 28,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    borderColor: '#a3e635',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    backgroundColor: 'rgba(163, 230, 53, 0.1)',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    color: '#ccc',
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  loadingText: {
    color: '#a3e635',
    marginTop: 10,
    fontSize: 18,
  },
  noDataText: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});
