import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Onboard/SplashScreen'
import SliderScreen from '../screens/Onboard/SliderScreen'

const Stack = createNativeStackNavigator()

const OnboardStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='splash' component={SplashScreen}></Stack.Screen>
            <Stack.Screen name='slider' component={SliderScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default OnboardStackNavigator