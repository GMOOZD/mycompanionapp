import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import * as Haptics from 'expo-haptics';

const questions = [
  {
    question: '¿Cómo enfrentas los problemas?',
    options: [
      { text: 'Con lógica', score: { Rick: 2 } },
      { text: 'Con miedo', score: { Morty: 2 } },
      { text: 'Ignorándolos', score: { Jerry: 2 } },
      { text: 'Con entusiasmo', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué prefieres hacer un sábado?',
    options: [
      { text: 'Experimentar', score: { Rick: 2 } },
      { text: 'Ver TV', score: { Morty: 2 } },
      { text: 'Trabajar', score: { Beth: 2 } },
      { text: 'Salir con amigos', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué te describe mejor?',
    options: [
      { text: 'Genio', score: { Rick: 2 } },
      { text: 'Inseguro', score: { Morty: 2 } },
      { text: 'Responsable', score: { Beth: 2 } },
      { text: 'Rebelde', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Cuál es tu debilidad?',
    options: [
      { text: 'Alcohol', score: { Rick: 2 } },
      { text: 'Autoestima', score: { Morty: 2 } },
      { text: 'Necesidad de aprobación', score: { Jerry: 2 } },
      { text: 'Impulsividad', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Con quién te identificas más?',
    options: [
      { text: 'Un científico loco', score: { Rick: 2 } },
      { text: 'Un adolescente confundido', score: { Morty: 2 } },
      { text: 'Un padre frustrado', score: { Jerry: 2 } },
      { text: 'Una joven valiente', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Cómo te llevas con tu familia?',
    options: [
      { text: 'Relación complicada', score: { Rick: 2 } },
      { text: 'Quiero que me entiendan', score: { Morty: 2 } },
      { text: 'Intento agradar a todos', score: { Jerry: 2 } },
      { text: 'Los desafío todo el tiempo', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué es más importante para ti?',
    options: [
      { text: 'Conocimiento', score: { Rick: 2 } },
      { text: 'Seguridad', score: { Morty: 2 } },
      { text: 'Aceptación', score: { Jerry: 2 } },
      { text: 'Libertad', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué harías con una máquina del tiempo?',
    options: [
      { text: 'Mejorarla', score: { Rick: 2 } },
      { text: 'Evitar errores pasados', score: { Morty: 2 } },
      { text: 'Ir a momentos felices', score: { Jerry: 2 } },
      { text: 'Vivir aventuras', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Cómo te enfrentas al miedo?',
    options: [
      { text: 'Lo niego', score: { Jerry: 2 } },
      { text: 'Lo enfrento con sarcasmo', score: { Rick: 2 } },
      { text: 'Me paraliza', score: { Morty: 2 } },
      { text: 'Lo uso como impulso', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Cómo tomas decisiones importantes?',
    options: [
      { text: 'Con análisis lógico', score: { Rick: 2 } },
      { text: 'Con ayuda de otros', score: { Morty: 2 } },
      { text: 'Con dudas', score: { Jerry: 2 } },
      { text: 'De forma impulsiva', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué superpoder preferirías?',
    options: [
      { text: 'Inteligencia infinita', score: { Rick: 2 } },
      { text: 'Invisibilidad', score: { Morty: 2 } },
      { text: 'Leer la mente', score: { Beth: 2 } },
      { text: 'Teletransportación', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué profesión se acerca más a tu estilo?',
    options: [
      { text: 'Científico', score: { Rick: 2 } },
      { text: 'Estudiante', score: { Morty: 2 } },
      { text: 'Veterinaria', score: { Beth: 2 } },
      { text: 'Influencer', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Cómo reaccionas a la crítica?',
    options: [
      { text: 'La ignoro', score: { Rick: 2 } },
      { text: 'Me afecta mucho', score: { Morty: 2 } },
      { text: 'Intento mejorar', score: { Jerry: 2 } },
      { text: 'Me molesta pero sigo', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué te hace feliz?',
    options: [
      { text: 'Crear cosas nuevas', score: { Rick: 2 } },
      { text: 'Tener apoyo emocional', score: { Morty: 2 } },
      { text: 'Ser querido', score: { Jerry: 2 } },
      { text: 'Tener libertad', score: { Summer: 2 } },
    ],
  },
  {
    question: '¿Qué harías en una crisis?',
    options: [
      { text: 'Buscar una solución lógica', score: { Rick: 2 } },
      { text: 'Pedir ayuda', score: { Morty: 2 } },
      { text: 'Entrar en pánico', score: { Jerry: 2 } },
      { text: 'Actuar rápido', score: { Summer: 2 } },
    ],
  },
];

export default function ProfilesScreen() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({
    Rick: 0,
    Morty: 0,
    Jerry: 0,
    Summer: 0,
    Beth: 0,
  });

  const handleAnswer = (option) => {
    const updatedScore = { ...score };
    Object.entries(option.score).forEach(([char, val]) => {
      updatedScore[char] += val;
    });
    setScore(updatedScore);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = Object.entries(updatedScore).reduce((max, current) =>
        current[1] > max[1] ? current : max
      )[0];
      alert(`¡Eres ${result.toUpperCase()}!`);
      setStarted(false);
      setCurrentQuestion(0);
      setScore({ Rick: 0, Morty: 0, Jerry: 0, Summer: 0, Beth: 0 });
    }
  };

  if (started) {
    const question = questions[currentQuestion];
    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Pregunta {currentQuestion + 1} de {questions.length}</Text>
          <Text style={styles.subtitle}>{question.question}</Text>
          {question.options.map((opt, index) => (
            <TouchableOpacity
              key={index}
              style={styles.startButton}
              onPress={() => handleAnswer(opt)}
            >
              <Text style={styles.startButtonText}>{opt.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>TEST PERSONALIDAD</Text>
        </View>
        <Image source={require('../assets/headrick.png')} style={styles.rickImage} resizeMode="contain" />
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.subtitle}>¿Qué personaje eres?</Text>
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
            <Text style={styles.characterName}>BETH SMITH</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            Haptics.selectionAsync();
            console.log('¡Vibración ejecutada!');
            setStarted(true);
          }}
        >
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
    textAlign: 'center',
  },
  characterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    borderRadius: 8,
    marginVertical: 10,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
