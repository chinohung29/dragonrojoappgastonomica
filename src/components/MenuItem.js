import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function MenuItem({ item }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.placeholderEmoji}>
          {getEmojiForCategory(item.category)}
        </Text>
      </View>
      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          {item.popular && (
            <View style={styles.popularBadge}>
              <Ionicons name="star" size={10} color="#FFF" />
            </View>
          )}
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.priceRow}>
          <View>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.currency}>MXN</Text>
          </View>
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Ionicons name="add" size={18} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 14,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.borderSubtle,
  },
  imagePlaceholder: {
    width: 85,
    height: 85,
    borderRadius: 16,
    backgroundColor: COLORS.cardHighlight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderEmoji: {
    fontSize: 40,
  },
  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    flex: 1,
  },
  popularBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 17,
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 6,
  },
  price: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primary,
  },
  currency: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginTop: -2,
  },
  addButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
