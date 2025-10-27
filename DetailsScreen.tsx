import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';

export default function DetailsScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const title = route.params?.title ?? 'Item';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>Tela de detalhes do catálogo. Aqui você poderia adicionar descrição e ações.</Text>
      <Button title="Exibir alerta" onPress={() => Alert.alert('Aviso', 'Isto é um Alert de exemplo.')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700', color: '#0a8b6f' },
  text: { fontSize: 14, color: '#233239' },
});