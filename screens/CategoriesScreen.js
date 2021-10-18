import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        style={{ backgroundColor: itemData.item.color }}
        onSelect={() => {
          navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
        }} />
    )
  }
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  list: {
  },
})
export default CategoriesScreen;