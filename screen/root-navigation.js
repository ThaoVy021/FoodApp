import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
    return {
      headerShown: false,
      tabBarShowLabel: false,
    };
};
export default RootNavigation = () => {
    return (
            <Tab.Navigator screenOptions={tabOptions}>
                <Tab.Screen
                    name='home'
                    component={HomeScreen}
                />
                <Tab.Screen
                    name='detail'
                    component={DetailScreen}
                />
                <Tab.Screen
                    name='map'
                    component={MapScreen}
                />
            </Tab.Navigator>
    )
}