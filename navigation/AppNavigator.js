import React from 'react';
import { Platform } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MealsNavigator from './MealsNavigator';
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from './navigationTheme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavoriteNavigator from './FavoriteNavigator';


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer
            theme={navigationTheme}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        const icons = {
                            Meals: 'ios-restaurant',
                            Favorite: 'ios-star',
                        };
                        return <Ionicons name={icons[route.name]} size={size} color={color} />
                    }
                })}
            >
                <Tab.Screen name="Meals" component={MealsNavigator} />
                <Tab.Screen name="Favorite" component={FavoriteNavigator} />
            </Tab.Navigator>
        </NavigationContainer>)
}

export default AppNavigator;