import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />
      <View style={styles.content}>
        <View style={styles.logoRow}>
          <Text style={styles.dragon}>🐉</Text>
          <View>
            <Text style={styles.title}>DRAGON ROJO</Text>
            <Text style={styles.subtitle}>Gastronomía Oriental</Text>
          </View>
        </View>
        <Ionicons name="search-outline" size={24} color={COLORS.accent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dragon: {
    fontSize: 36,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.accent,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textLight,
    letterSpacing: 1,
    marginTop: 2,
  },
});
