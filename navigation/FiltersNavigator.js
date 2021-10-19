import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FiltersScreen from '../screens/FiltersScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Stack = createStackNavigator();

const FiltersNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? '#546abf' : 'white',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        }
        } >
        <Stack.Screen
            name="Filters"
            component={FiltersScreen}
            options={({ navigation }) => ({
                title: 'Filters',
            })}
        />
    </Stack.Navigator >
)

export default FiltersNavigator;
;