import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import CartegoriesScreen from '../screens/CategoriesScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Platform } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();

const MealsNavigator = ({ navigation }) => (
    <Stack.Navigator
        mode="modal"
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? '#546abf' : 'white',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
        } >
        <Stack.Screen
            name="Categories"
            component={CartegoriesScreen}
        />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={() => ({
                title: 'Awesome app',
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item iconName='ios-star' title='Favorite' onPress={() => { console.log('this marked as favorite') }} />
                    </HeaderButtons>
                ),
            })}
        />
    </Stack.Navigator >
)

export default MealsNavigator;