import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Landing() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Hero Image */}
      <Image 
        source={require('./../assets/images/fondo1.png')}
        style={styles.heroImage}
      />

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {/* App Title with Gradient */}
        <Text style={styles.title}>SMART VISION</Text>

        {/* Description Card */}
        <View style={styles.card}> 
          <Text style={styles.descriptionText}>
            Entrena de manera inteligente con nuestra guía de corrección de postura en tiempo real. 
            Evita lesiones, mejora tu técnica y alcanza tus objetivos con seguridad.
          </Text>  
        </View>
      </View>

      {/* CTA Button */}
      <TouchableOpacity 
        onPress={() => {router.push('/auth/Login');}}
        style={styles.buttonContainer}>
          <LinearGradient
            colors={['#310071', '#C20054']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}>
            <Text style={styles.buttonText}>COMENZAR</Text>
          </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 300,
    marginTop: 100,
  },
  contentContainer: {
    marginTop: 25,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'transparent',
    backgroundImage: 'linear-gradient(90deg, #310071, #C20054)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  },
  card: {
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22, 
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 30, 
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'outfit-bold',
    letterSpacing: 1.5,
  },
});