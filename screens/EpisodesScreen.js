// screens/EpisodesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import API from '../services/api';

export default function EpisodesScreen({ navigation }) {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/temporadas')
      .then(res => {
        console.log(' Temporadas recibidas:', res.data);
        const datos = res.data.temporadas || res.data;
        setSeasons(datos);
        setLoading(false);
      })
      .catch(err => {
        console.error(' Error al cargar temporadas:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00ffaa" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temporadas disponibles</Text>
      <FlatList
        data={seasons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('SeasonDetail', {
                season_number: item.season_number,
                episodes: item.episodes,
              })
            }
          >
            <Text style={styles.name}>Temporada {item.season_number}</Text>
            <Text style={styles.episodeCount}>{item.episodes.length} episodios</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#000010' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#00ffaa', marginBottom: 12 },
  card: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  name: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
  episodeCount: { fontSize: 14, color: '#ccc', marginTop: 4 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
