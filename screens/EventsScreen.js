import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';

const EVENTS = [
  { id: '1', name: 'Wormageddon, Summer MALVADA', date: 'Sep 5th 2025', type: 'upcoming' },
  { id: '2', name: 'Smoky Mountain Fan Fest', date: 'Sep 5th 2025', type: 'upcoming' },
  { id: '3', name: 'GalaxyCon Raleigh 2025', date: 'Sep 5th 2025', type: 'upcoming' },
  { id: '4', name: 'Comic Con Revolution Ontario', date: 'Aug 20th 2025', type: 'past' },
];

export default function EventsScreen() {
  const [filter, setFilter] = useState('upcoming');

  const filteredEvents = EVENTS.filter(event => event.type === filter);

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>EVENTOS</Text>

        {/* Filtros */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'upcoming' && styles.activeFilter]}
            onPress={() => setFilter('upcoming')}
          >
            <Image
              source={require('../assets/upcoming-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.filterText}>PRÓXIMOS EVENTOS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterButton, filter === 'past' && styles.activeFilter]}
            onPress={() => setFilter('past')}
          >
            <Image
              source={require('../assets/related-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.filterText}>EVENTOS RELACIONADOS</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de eventos */}
        <FlatList
          data={filteredEvents}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventItem}>
              <Text style={styles.eventDate}>{item.date}</Text>
              <Text style={styles.eventName}>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={styles.list}
        />

        {/* Botones adicionales */}
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>ORGANIZA TU EVENTO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>ÚNETE A LA COMUNIDAD</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#a3e635',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#222',
    alignItems: 'center',
  },
  activeFilter: {
    backgroundColor: '#a3e635',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 30,
  },
  eventItem: {
    backgroundColor: 'rgba(0,255,170,0.15)',
    borderColor: '#00ffaa',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  eventDate: {
    color: '#a3e635',
    fontSize: 14,
    marginBottom: 4,
  },
  eventName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  mainButton: {
    backgroundColor: '#a3e635',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  mainButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#a3e635',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryButtonText: {
    color: '#a3e635',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
