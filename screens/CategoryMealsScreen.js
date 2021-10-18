import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';



const CategoryMealsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;
    const categoryMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return (
        <MealList meals={categoryMeals} navigation={navigation} />
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const { categoryId } = route.params;
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMealsScreen;