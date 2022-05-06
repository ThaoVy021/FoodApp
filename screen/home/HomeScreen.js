import React from 'react';
import {View, Text} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from '../detail/DetailScreen';
import MapScreen from '../map/MapScreen';
import { icons } from '../../assets/data/Constant';
import HomeTitle from '../components/HomeTitle';
import HomeProduct from '../components/HomeProduct';
import HomeBottomTab from '../components/HomeBottomTab';
import rootNavigation from '../root-navigation';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default HomeScreen = ({navigation}) => {
  
    return(
      <View style={{flex:1}}>
        <HomeTitle />
        <HomeProduct />
        <HomeBottomTab />
      {/* <Drawer.Navigator>
        <Drawer.Screen name='detail_draw' component={DetailScreen} />
        <Drawer.Screen name='map_draw' component={MapScreen} />
      </Drawer.Navigator> */}
      </View>
    )
}