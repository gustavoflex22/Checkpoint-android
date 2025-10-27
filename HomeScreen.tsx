import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <Text style={styles.subtitle}>
        Este app demonstra uma navegação híbrida com Drawer + Stack + Tabs
        e integra componentes básicos do React Native.
      </Text>

      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Catalog')}>
          <Text style={styles.cardTitle}>Ir ao Catálogo</Text>
          <Text style={styles.cardText}>ScrollView, Picker e navegação para detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Form')}>
          <Text style={styles.cardTitle}>Abrir Formulário</Text>
          <Text style={styles.cardText}>TextInput, validação e Alert</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.card, styles.full]} onPress={() => navigation.navigate('Tools')}>
        <Text style={styles.cardTitle}>Ferramentas</Text>
        <Text style={styles.cardText}>Calculadora simples (÷, ×, +, −)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0a8b6f',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#233239',
  },
  cardRow: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#f4f7f6',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#d9e3df',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#233239',
  },
  cardText: {
    fontSize: 13,
    color: '#233239',
    opacity: 0.8,
  },
  full: {
    width: '100%',
  }
});