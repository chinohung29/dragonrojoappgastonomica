import React, { useState, useMemo } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import PopularSection from '../components/PopularSection';
import MenuItem from '../components/MenuItem';

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const popularItems = useMemo(
    () => MENU_ITEMS.filter((item) => item.popular),
    []
  );

  const filteredItems = useMemo(
    () =>
      selectedCategory
        ? MENU_ITEMS.filter((item) => item.category === selectedCategory)
        : MENU_ITEMS,
    [selectedCategory]
  );

  const categoryName = selectedCategory
    ? CATEGORIES.find((c) => c.id === selectedCategory)?.name
    : 'Todos los Platillos';

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItem item={item} />}
        ListHeaderComponent={
          <View>
            {!selectedCategory && <PopularSection items={popularItems} />}
            <CategoryFilter
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <View style={styles.menuHeader}>
              <View style={styles.menuTitleRow}>
                <View style={styles.titleDot} />
                <Text style={styles.menuTitle}>{categoryName}</Text>
              </View>
              <View style={styles.countBadge}>
                <Text style={styles.menuCount}>{filteredItems.length}</Text>
              </View>
            </View>
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingBottom: 40,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 14,
  },
  menuTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
  },
  countBadge: {
    backgroundColor: COLORS.categoryBg,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  menuCount: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },
});
