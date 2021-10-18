import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../contants/Colors'

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform === 'android' ? Colors.primary : 'white'} />
    );
}

const styles = StyleSheet.create({
    container: {}
})
export default CustomHeaderButton;