import React from 'react';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import FiltersNavigator from './FiltersNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import Colors from '../contants/Colors';

const Drawer = createDrawerNavigator();

const MainNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: Colors.primary,
                drawerLabelStyle: {
                    fontFamily: 'open-sans-bold'
                }
            }}
        >
            <Drawer.Screen name="MealsFav" component={AppNavigator} options={{ drawerLabel: 'Meals' }} />
            <Drawer.Screen name="Filter" component={FiltersNavigator} />
        </Drawer.Navigator>
    </NavigationContainer>)


export default MainNavigator;