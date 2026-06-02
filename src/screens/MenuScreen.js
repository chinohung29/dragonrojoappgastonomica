import React, { useState, useMemo } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
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
              <Text style={styles.menuTitle}>{categoryName}</Text>
              <Text style={styles.menuCount}>
                {filteredItems.length} platillos
              </Text>
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
    paddingBottom: 30,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  menuCount: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
});
