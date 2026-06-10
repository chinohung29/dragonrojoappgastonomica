import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';

export default function PopularSection({ items }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.titleRow}>
          <View style={styles.fireIcon}>
            <Ionicons name="flame" size={18} color={COLORS.textLight} />
          </View>
          <Text style={styles.sectionTitle}>Más Populares</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.seeAll}>Ver todo</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.map((item, index) => (
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              {index === 0 && (
                <View style={styles.topBadge}>
                  <Ionicons name="trophy" size={10} color="#FFF" />
                  <Text style={styles.topText}>#1</Text>
                </View>
              )}
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.4)']}
                style={styles.imageOverlay}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardCategory}>
                {getCategoryLabel(item.category)}
              </Text>
              <Text style={styles.cardName} numberOfLines={1}>{item.name}</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.cardPrice}>${item.price}</Text>
                <View style={styles.addBtn}>
                  <Ionicons name="add" size={16} color={COLORS.textLight} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function getCategoryLabel(category) {
  const labels = {
    entradas: 'Entrada',
    sopas: 'Sopa',
    platillos: 'Fuerte',
    arroz: 'Arroz',
    mariscos: 'Marisco',
    bebidas: 'Bebida',
    postres: 'Postre',
  };
  return labels[category] || '';
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  fireIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 14,
  },
  card: {
    width: 170,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.cardHighlight,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  topBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  topText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFF',
  },
  cardInfo: {
    padding: 12,
  },
  cardCategory: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardName: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.accent,
  },
  addBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
