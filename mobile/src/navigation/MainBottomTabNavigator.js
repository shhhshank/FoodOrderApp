import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Tab/HomeScreen';
import CartScreen from '../screens/Tab/CartScreen';
import FavoriteScreen from '../screens/Tab/FavoriteScreen';
import SettingsScreen from '../screens/Tab/SettingScreen';
import MyTabBar from '../components/TabBar/MyTabBar';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: 'home-outline' }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarIcon: 'cart-outline' }} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ tabBarIcon: 'heart-outline' }} />
            <Tab.Screen name="Setting" component={SettingsScreen} options={{ tabBarIcon: 'cog-outline' }} />
        </Tab.Navigator>
    );
};

export default MainBottomTabNavigator;
