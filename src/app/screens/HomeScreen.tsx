import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }: any) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userEmail'); // Borra el usuario guardado
      navigation.replace('Login'); // Redirige al login
    } catch (error) {
      console.log('Error cerrando sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a BeatApp 🎧</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
