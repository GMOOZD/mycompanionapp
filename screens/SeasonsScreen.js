// screens/SeasonsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import API from '../services/api'; // Asegúrate de que la ruta sea correcta

export default function SeasonsScreen() {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/temporadas')
      .then(res => {
        setSeasons(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar temporadas:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00ffcc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temporadas</Text>
      <FlatList
        data={seasons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name || item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  name: { fontSize: 18 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
