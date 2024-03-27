import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStackNavigator from './AuthStackNavigator'
import OnboardStackNavigator from './OnboardStackNavigator'
import MainBottomTabNavigator from './MainBottomTabNavigator'
import FoodItemScreen from '../screens/App/FoodItemScreen'

const Stack = createNativeStackNavigator()

const AppStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='tab' component={MainBottomTabNavigator}></Stack.Screen>
            <Stack.Screen name='food' component={FoodItemScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppStackNavigator