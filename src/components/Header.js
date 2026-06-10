import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/colors';

export default function Header() {
  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryDark} />
      <View style={styles.content}>
        <View style={styles.logoRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.dragon}>🐉</Text>
          </View>
          <View>
            <Text style={styles.title}>DRAGÓN ROJO</Text>
            <Text style={styles.subtitle}>Gastronomía Oriental</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchBtn} activeOpacity={0.7}>
          <Ionicons name="search-outline" size={20} color={COLORS.primaryDark} />
        </TouchableOpacity>
      </View>
      <View style={styles.promoBar}>
        <Ionicons name="bicycle-outline" size={16} color={COLORS.accentLight} />
        <Text style={styles.promoText}>Envío gratis en pedidos +$200</Text>
        <Ionicons name="chevron-forward" size={14} color={COLORS.accentLight} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 52,
    paddingBottom: 14,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  logoCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragon: {
    fontSize: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.accentLight,
    letterSpacing: 3,
  },
  subtitle: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 1.5,
    marginTop: 2,
    textTransform: 'uppercase',
  },
  searchBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.accentLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 14,
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 12,
  },
  promoText: {
    fontSize: 12,
    color: COLORS.accentLight,
    fontWeight: '600',
  },
});
