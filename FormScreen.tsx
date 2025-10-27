import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function FormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    if (!name.trim() || !email.includes('@')) {
      Alert.alert('Formulário inválido', 'Preencha nome e email válido.');
      return;
    }
    Alert.alert('Sucesso', `Obrigado, ${name}! Enviamos um email para ${email}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <Button title="Enviar" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 22, fontWeight: '700', color: '#0a8b6f', marginBottom: 8 },
  label: { fontSize: 13, color: '#233239' },
  input: {
    borderWidth: 1,
    borderColor: '#d9e3df',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff'
  },
});