import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

// Asegúrate de que esta pantalla reciba 'route' si necesitas parámetros como el ID de la temporada
export default function EpisodiesScreen({ route }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { seasonId } = route.params || {}; // Por ejemplo, si pasas seasonId

  useEffect(() => {
    // Ejemplo de cómo podrías hacer la llamada a la API de episodios
    // Si necesitas el seasonId, lo usarías aquí.
    // Ejemplo de URL: `https://mock.apidog.com/m1/912109-894454-default/seasons/${seasonId}/episodes`
    const apiUrl = seasonId
      ? `https://mock.apidog.com/m1/912109-894454-default/seasons/${seasonId}/episodes`
      : 'https://mock.apidog.com/m1/912109-894454-default/episodes'; // URL de ejemplo para todos los episodios si no hay seasonId

    axios.get(apiUrl)
      .then(response => {
        setEpisodes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener los episodios:", error);
        setLoading(false);
      });
  }, [seasonId]); // Se ejecuta cuando seasonId cambia

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
          keyExtractor={(item) => item.episode_number.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Episodio {item.episode_number}: {item.name}</Text>
              <Text style={styles.cardText}>Fecha de emisión: {item.air_date}</Text>
              {item.overview && <Text style={styles.cardText}>Sinopsis: {item.overview}</Text>}
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
    backgroundColor: '#111', // Fondo oscuro
  },
  title: {
    color: '#a3e635', // Color similar al de tu barra de pestañas
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
    backgroundColor: 'rgba(163, 230, 53, 0.1)', // Fondo semi-transparente del color de la barra
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