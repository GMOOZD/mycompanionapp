import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function ProfilesScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.title}>TEST PERSONALIDAD</Text>
        </View>

        {/* Imagen de Rick en el portal */}
        <Image
          source={require('../assets/headrick.png')}
          style={styles.rickImage}
          resizeMode="contain"
        />

        {/* Logo */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Subtítulo */}
        <Text style={styles.subtitle}>¿Qué personaje eres?</Text>

        {/* Personajes */}
        <View style={styles.characterRow}>
          <View style={styles.character}>
            <Image source={require('../assets/pers1.png')} style={styles.characterImg} />
            <Text style={styles.characterName}>MORTY SMITH</Text>
          </View>
          <View style={styles.character}>
            <Image source={require('../assets/pers2.png')} style={styles.characterImg} />
            <Text style={styles.characterName}>JERRY SMITH</Text>
          </View>
          <View style={styles.character}>
            <Image source={require('../assets/pers3.png')} style={styles.characterImg} />
            <Text style={styles.characterName}>BETH SMITH</Text>
          </View>
          <View style={styles.character}>
            <Image source={require('../assets/pers4.png')} style={styles.characterImg} />
            <Text style={styles.characterName}>VERANO SMITH</Text>
          </View>
        </View>

        {/* Botón principal */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>START TEST</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a3e635',
  },
  rickImage: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  logo: {
    width: 200,
    height: 70,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  characterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 30,
  },
  character: {
    alignItems: 'center',
    margin: 6,
    width: 80,
  },
  characterImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#00ffaa',
    marginBottom: 4,
  },
  characterName: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#a3e635',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
