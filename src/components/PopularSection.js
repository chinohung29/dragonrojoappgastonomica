import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function PopularSection({ items }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.titleRow}>
          <Ionicons name="flame" size={22} color={COLORS.primary} />
          <Text style={styles.sectionTitle}>Más Populares</Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.emoji}>{getEmojiForCategory(item.category)}</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardName} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.cardPrice}>${item.price} MXN</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function getEmojiForCategory(category) {
  const emojis = {
    entradas: '🥟',
    sopas: '🍜',
    platillos: '🍗',
    arroz: '🍚',
    mariscos: '🦐',
    bebidas: '🍵',
    postres: '🍨',
  };
  return emojis[category] || '🍽️';
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: 160,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  imagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: COLORS.categoryBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  cardInfo: {
    padding: 10,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.primary,
  },
});
