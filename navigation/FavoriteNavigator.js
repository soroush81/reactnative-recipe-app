import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import { Platform } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Stack = createStackNavigator();

const FavoriteNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? '#546abf' : 'white',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
        } >
        <Stack.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={({ navigation }) => ({
                title: 'You Favorite',
            })}
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator >
)

export default FavoriteNavigator;
;