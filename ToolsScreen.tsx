import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ToolsScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const parse = (v: string) => Number(v.replace(',', '.'));

  const calc = (op: string) => {
    const x = parse(a), y = parse(b);
    if (Number.isNaN(x) || Number.isNaN(y)) {
      Alert.alert('Erro', 'Informe números válidos');
      return;
    }
    if (op === '÷' && y === 0) {
      Alert.alert('Aviso', 'Divisão por zero não permitida.');
      return;
    }
    let result = 0;
    switch (op) {
      case '+': result = x + y; break;
      case '−': result = x - y; break;
      case '×': result = x * y; break;
      case '÷': result = x / y; break;
    }
    Alert.alert('Resultado', `${x} ${op} ${y} = ${result}`);
  };

  const Button = ({label}:{label:string}) => (
    <TouchableOpacity style={styles.btn} onPress={() => calc(label)}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Simples</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="A" value={a} onChangeText={setA} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="B" value={b} onChangeText={setB} keyboardType="numeric" />
      </View>
      <View style={styles.row}>
        <Button label="+" /><Button label="−" /><Button label="×" /><Button label="÷" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700', color: '#0a8b6f' },
  row: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d9e3df',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff'
  },
  btn: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f4f7f6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d9e3df',
    alignItems: 'center'
  },
  btnText: { fontSize: 18, fontWeight: '700', color: '#233239' },
});