import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MealItem = ({ affordability, complexity, duration, imageUrl, title, onSelect }) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelect} >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>
                                    {title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{duration}m</Text>
                        <Text>{complexity.toUpperCase()}</Text>
                        <Text>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        </View >
    );
}

const styles = StyleSheet.create({
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    mealRow: {
        flexDirection: 'row',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'white',

        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})
export default MealItem;