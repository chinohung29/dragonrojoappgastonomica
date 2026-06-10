import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categorías</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={[styles.chip, !selectedCategory && styles.chipActive]}
          onPress={() => onSelectCategory(null)}
          activeOpacity={0.7}
        >
          <View style={[styles.iconCircle, !selectedCategory && styles.iconCircleActive]}>
            <Ionicons
              name="grid-outline"
              size={18}
              color={!selectedCategory ? COLORS.textLight : COLORS.primary}
            />
          </View>
          <Text style={[styles.chipText, !selectedCategory && styles.chipTextActive]}>
            Todos
          </Text>
        </TouchableOpacity>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              style={[styles.chip, isActive && styles.chipActive]}
              onPress={() => onSelectCategory(cat.id)}
              activeOpacity={0.7}
            >
              <View style={[styles.iconCircle, isActive && styles.iconCircleActive]}>
                <Ionicons
                  name={cat.icon}
                  size={18}
                  color={isActive ? COLORS.textLight : COLORS.primary}
                />
              </View>
              <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 10,
  },
  chip: {
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: COLORS.borderSubtle,
    minWidth: 80,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  chipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    shadowOpacity: 0.15,
    elevation: 4,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.categoryBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircleActive: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  chipText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text,
  },
  chipTextActive: {
    color: COLORS.textLight,
  },
});
