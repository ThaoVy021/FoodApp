import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import DetailScreen from '../detail/DetailScreen';
import MapScreen from '../map/MapScreen';

const Tab = createBottomTabNavigator()
export default HomeBottomTab = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name='detail_tab' component={DetailScreen}/>
                <Tab.Screen 
                name='map_tab' 
                component={MapScreen}
                options={{
                    tabBarIcon: (focused) => (
                    <Text style={{
                        color: focused ? 'red' : 'black'
                    }}>Customer</Text>
                    )
                }}
                />
            </Tab.Navigator>
    )
}