import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

const CategoryGridTile = ({ title, onSelect, style }) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp onPress={onSelect} style={{ flex: 1 }}>
                <View style={{ ...styles.container, ...style }}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableCmp>
        </View >
    );
}

const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        height: 150,
        margin: 15,
        borderRadius: 10,
        overflow: (Platform.OS === ' android' && Platform.Version >= 21) ? 'hidden' : 'visible',
        elevation: 6,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold'

    }
})
export default CategoryGridTile;