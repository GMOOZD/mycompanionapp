import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [hover, setHover] = useState(false);

  const handleSubmit = () => {
    if (username && password) {
      navigation.navigate('MainTabs');
    }
  };

  const handleGuestAccess = () => {
    navigation.navigate('MainTabs', {
      screen: 'Inicio',
      params: {
        screen: 'Bienvenido', // <- apunta al screen del Drawer
      },
    });
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.form}>
          <Text style={styles.title}>Inicia Sesión</Text>

          <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            onPress={handleSubmit}
            onPressIn={() => setHover(true)}
            onPressOut={() => setHover(false)}
            style={[styles.button, hover && styles.buttonHover]}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>INSCRÍBETE</Text>
        </Pressable>

        <Pressable onPress={handleGuestAccess}>
          <Text style={styles.link}>CONTINUAR COMO INVITADO</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 20,
  },
  form: {
    backgroundColor: 'rgba(0, 255, 204, 0.1)',
    borderColor: '#00ffaa',
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
  },
  title: {
    color: '#00ffaa',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#001122',
    color: '#fff',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: '#00ffaa',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#00ffaa',
    padding: 12,
    borderRadius: 8,
  },
  buttonHover: {
    backgroundColor: '#00ffcc',
    shadowColor: '#00ffaa',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#a3e635',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    maxWidth: 400,
    marginBottom: 10,
  },
  secondaryButtonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
