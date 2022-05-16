import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from '../detail/DetailScreen';
import MapScreen from '../map/MapScreen';
import { icons } from '../../assets/data/Constant';
import HomeTitle from '../components/HomeTitle';
import HomeProduct from '../components/HomeProduct';
import HomeBottomTab from '../components/HomeBottomTab';
import AppBar from './component/AppBar'
import Categories from './component/Categories'
import Menu from './component/Menu'
import styles from './styles/styles'
import { menuData } from '../../common/Contant';
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
export default HomeScreen = ({navigation}) => {
 
  
    return(
      <SafeAreaView style={styles.container}>
      <AppBar />
      <Categories />
      <Menu/>
      </SafeAreaView>
  )
}
{/* <View style={{flex:1}}>
<HomeTitle />
<HomeProduct />
<HomeBottomTab />
<Drawer.Navigator>
<Drawer.Screen name='detail_draw' component={DetailScreen} />
<Drawer.Screen name='map_draw' component={MapScreen} />
</Drawer.Navigator>
</View> */}