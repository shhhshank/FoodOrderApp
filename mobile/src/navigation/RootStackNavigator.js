import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStackNavigator from './AuthStackNavigator'
import OnboardStackNavigator from './OnboardStackNavigator'
import AppStackNavigator from './AppStackNavigator'

const Stack = createNativeStackNavigator()

const RootStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='OnboardStack' component={OnboardStackNavigator}></Stack.Screen>
            <Stack.Screen name='AuthStack' component={AuthStackNavigator}></Stack.Screen>
            <Stack.Screen name='AppStack' component={AppStackNavigator}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default RootStackNavigator