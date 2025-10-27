import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

type Item = { id: number; title: string; category: 'Tech' | 'Home' | 'Books' };

const ITEMS: Item[] = [
  { id: 1, title: 'Headphones X', category: 'Tech' },
  { id: 2, title: 'Smart Lamp', category: 'Home' },
  { id: 3, title: 'React Native Guide', category: 'Books' },
  { id: 4, title: 'Mechanical Keyboard', category: 'Tech' },
  { id: 5, title: 'Cadeira Ergonômica', category: 'Home' },
  { id: 6, title: 'Clean Architecture', category: 'Books' },
];

export default function CatalogScreen() {
  const [category, setCategory] = useState<'All' | 'Tech' | 'Home' | 'Books'>('All');
  const navigation = useNavigation<any>();

  const filtered = useMemo(() => {
    if (category == 'All') return ITEMS;
    return ITEMS.filter(i => i.category === category);
  }, [category]);

  return (
    <View style={styles.container}>
      <View style={styles.pickerRow}>
        <Text style={styles.label}>Filtrar por:</Text>
        <View style={styles.pickerBox}>
          <Picker selectedValue={category} onValueChange={(v) => setCategory(v)}>
            <Picker.Item label="Todas" value="All" />
            <Picker.Item label="Tech" value="Tech" />
            <Picker.Item label="Home" value="Home" />
            <Picker.Item label="Books" value="Books" />
          </Picker>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {filtered.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate('Details', { itemId: item.id, title: item.title })}
          >
            <Image source={require('../../assets/icon.png')} style={styles.thumb} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.cat}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  label: { fontSize: 14, color: '#233239' },
  pickerBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d9e3df',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  list: { padding: 12, gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f4f7f6',
    borderWidth: 1,
    borderColor: '#d9e3df',
    padding: 12,
    borderRadius: 16,
  },
  thumb: { width: 48, height: 48, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: '700', color: '#233239' },
  cat: { fontSize: 12, opacity: 0.7, color: '#233239' },
});