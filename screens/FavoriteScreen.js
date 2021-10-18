import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';



const FavoriteScreen = ({ route, navigation }) => {
    const favMeals = MEALS.filter(meal => meal.id == 'm1' || meal.id == 'm2')


    return (
        <MealList meals={favMeals} navigation={navigation} />
    );
}

export default FavoriteScreen;