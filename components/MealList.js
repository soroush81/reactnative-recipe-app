import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from '../components/MealItem';

const MealList = ({ meals, navigation }) => {
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                onSelect={() => {
                    navigation.navigate('MealDetail', { mealId: itemData.item.id })

                }} />
        )
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={meals}
                renderItem={renderMealItem}
                style={{ width: '100%', padding: 15 }}
            />
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
export default MealList;