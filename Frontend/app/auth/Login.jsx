import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* App Title with Gradient */}
      <Text style={styles.title}>SMART VISION</Text>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {/* Hero Image */}
        <Image 
          source={require('./../../assets/images/fondo1.png')}
          style={styles.heroImage}
        />

        {/* Login Card */}
        <View style={styles.card}>
          {/* Login Title */}
          <Text style={styles.loginTitle}>Inicia Sesión</Text>

          {/* Email Field */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={20} color="#777" style={styles.icon} />
            <View style={styles.inputWrapper}>
              {(isEmailFocused || email) ? null : (
                <Text style={styles.placeholderText}>Ingresa tu correo</Text>
              )}
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                keyboardType="email-address"
              />
              <View style={styles.underline} />
            </View>
          </View>

          {/* Password Field */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={20} color="#777" style={styles.icon} />
            <View style={styles.inputWrapper}>
              {(isPasswordFocused || password) ? null : (
                <Text style={styles.placeholderText}>Contraseña</Text>
              )}
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                secureTextEntry
              />
              <View style={styles.underline} />
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity 
            onPress={() => router.replace('/(tabs)/Home')}
            style={styles.buttonContainer}
          >
            <LinearGradient
              colors={['#310071', '#C20054']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>INICIAR</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Create Account */}
          <View style={styles.createAccountContainer}>
            <Text style={styles.createAccountText}>¿No tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => router.push('/auth/Register')}>
              <Text style={styles.createAccountLink}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    height: 250,
  },
  contentContainer: {
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginTop: 50,
    fontSize: 45,
    fontWeight: 750,
    textAlign: 'center',
    color: 'transparent',
    backgroundImage: 'linear-gradient(90deg, #310071, #C20054)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    marginBottom: 10,
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
  loginTitle: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 25,
    height: 60,
  },
  icon: {
    marginRight: 15,
    marginBottom: 10,
  },
  inputWrapper: {
    flex: 1,
    position: 'relative',
  },
  placeholderText: {
    position: 'absolute',
    left: 0,
    top: 0,
    fontSize: 16,
    color: '#777',
  },
  input: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
    paddingHorizontal: 0,
    height: 30,
  },
  underline: {
    height: 1,
    backgroundColor: '#ddd',
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#310071',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
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
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  createAccountText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'transparent',
    backgroundImage: 'linear-gradient(90deg, #310071, #C20054)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  },
});