import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';

export default function CharactersScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.welcomeText}>
            ¡Bienvenido a la app oficial de Rick y Morty!{"\n"}
            Explora universos paralelos, descubre secretos y disfruta de contenido exclusivo. Mantente al tanto de las últimas novedades, personajes y aventuras interdimensionales con esta experiencia única. ¡Únete al caos!
          </Text>
        </View>

        <View style={styles.centerSection}>
          <Image
            source={require('../assets/portal.png')}
            style={styles.portalImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  topSection: {
    marginTop: 60,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#ccffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 22,
    padding: 10,
    borderRadius: 8,
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portalImage: {
    width: 280,
    height: 280,
  },
});