import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title
        })
    }, [])

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default MealDetailScreen;