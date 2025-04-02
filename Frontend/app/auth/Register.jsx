import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    fechaNacimiento: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <View style={styles.container}>
      {/* Content Section */}
      <View style={styles.contentContainer}>
        {/* App Title with Gradient */}
        <Text style={styles.title}>SMART VISION</Text>

        {/* Register Card */}
        <View style={styles.card}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => router.replace('auth/Login')} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.loginTitleCentered}>Regístrate</Text>
            </View>

          {/* Nombre */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={20} color="#777" style={styles.icon} />
            <View style={styles.inputWrapper}>
              {(focusedField === 'nombre' || formData.nombre) ? null : (
                <Text style={styles.placeholderText}>Nombre completo</Text>
              )}
              <TextInput
                style={styles.input}
                value={formData.nombre}
                onChangeText={(text) => handleInputChange('nombre', text)}
                onFocus={() => handleFocus('nombre')}
                onBlur={handleBlur}
                editable={true}  
              />
              <View style={styles.underline} />
            </View>
          </View>

          {/* Fecha nacimiento */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="cake" size={20} color="#777" style={styles.icon} />
            <View style={styles.inputWrapper}>
              {(focusedField === 'fechaNacimiento' || formData.fechaNacimiento) ? null : (
                <Text style={styles.placeholderText}>Fecha de nacimiento</Text>
              )}
              <TextInput
                style={styles.input}
                value={formData.fechaNacimiento}
                onChangeText={(text) => handleInputChange('fechaNacimiento', text)}
                onFocus={() => handleFocus('fechaNacimiento')}
                onBlur={handleBlur}
                placeholder="DD/MM/AAAA"
                placeholderTextColor="#999"
                editable={true}  // Asegura que sea editable
              />
              <View style={styles.underline} />
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={20} color="#777" style={styles.icon} />
            <View style={styles.inputWrapper}>
              {(focusedField === 'email' || formData.email) ? null : (
                <Text style={styles.placeholderText}>Correo electrónico</Text>
              )}
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={true} 
              />
              <View style={styles.underline} />
            </View>
          </View>

          {/* Contraseña */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={20} color="#777" style={styles.icon} />
            <View style={styles.inputWrapper}>
              {(focusedField === 'password' || formData.password) ? null : (
                <Text style={styles.placeholderText}>Contraseña</Text>
              )}
              <TextInput
                style={styles.input}
                value={formData.password}
                onChangeText={(text) => handleInputChange('password', text)}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
                secureTextEntry
                editable={true}  
              />
              <View style={styles.underline} />
            </View>
          </View>

          {/* Confirmar contraseña */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock-outline" size={20} color="#777" style={styles.icon} />
            <View style={styles.inputWrapper}>
              {(focusedField === 'confirmPassword' || formData.confirmPassword) ? null : (
                <Text style={styles.placeholderText}>Confirmar contraseña</Text>
              )}
              <TextInput
                style={styles.input}
                value={formData.confirmPassword}
                onChangeText={(text) => handleInputChange('confirmPassword', text)}
                onFocus={() => handleFocus('confirmPassword')}
                onBlur={handleBlur}
                secureTextEntry
                editable={true} 
              />
              <View style={styles.underline} />
            </View>
          </View>

          {/* Register Button */}
          <TouchableOpacity 
            style={styles.buttonContainer}
          >
            <LinearGradient
              colors={['#310071', '#C20054']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>REGISTRARME</Text>
            </LinearGradient>
          </TouchableOpacity>

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
  contentContainer: {
    marginTop: 50,
    padding: 10,
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  loginTitleCentered: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
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
  buttonContainer: {
    width: '100%',
    marginTop: 10,
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});