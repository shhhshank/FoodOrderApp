import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/Auth/LoginScreen'
import Colors from '../constants/Colors'
import SignUpScreen from '../screens/Auth/SignUpScreen'

const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false, statusBarTranslucent: false, statusBarColor: Colors.LIGHT }}>
            <Stack.Screen name='login' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='signup' component={SignUpScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthStackNavigator